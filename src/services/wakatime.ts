// Serviço para interagir com a API do WakaTime
interface WakaTimeResponse {
  data?: {
    total_seconds: number;
    human_readable_total: string;
    daily_average: number;
    human_readable_daily_average: string;
  };
  status?: string;
  percent_calculated?: number;
  human_readable_range?: string;
}

interface WakaTimeUserResponse {
  data: {
    id: string;
    email: string;
    created_at: string;
    display_name: string;
    profile_url: string;
    last_heartbeat_at: string;
    timezone: string;
  };
}

type WakaTimeStats = {
  total_seconds: number;
  human_readable_total: string;
  daily_average: number;
  human_readable_daily_average: string;
};

type WakaTimeUser = {
  id: string;
  email: string;
  created_at: string;
  display_name: string;
  profile_url: string;
  last_heartbeat_at: string;
  timezone: string;
};

export interface WakaTimeData {
  stats: WakaTimeStats | null;
  user: WakaTimeUser | null;
}

export class WakaTimeService {
  private static readonly BASE_URL = 'https://wakatime.com/api/v1';

  static async getUser(): Promise<WakaTimeUser | null> {
    try {
      const apiKey = process.env.WAKATIME_API_KEY;
      console.log('WakaTime API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND');
      
      const response = await fetch(`${this.BASE_URL}/users/current`, {
        headers: {
          'Authorization': `Basic ${Buffer.from(apiKey || '').toString('base64')}`,
          'Content-Type': 'application/json',
        },
        cache: 'force-cache'
      });

      console.log('WakaTime User API Response Status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('WakaTime User API error:', response.status, response.statusText, errorText);
        return null;
      }

      const data: WakaTimeUserResponse = await response.json();
      console.log('WakaTime User API Response:', data);
      return data.data;
    } catch (error) {
      console.error('Error fetching WakaTime user:', error);
      return null;
    }
  }

  static async getWakaTimeData(): Promise<WakaTimeData> {
    const [stats, user] = await Promise.all([
      this.getTotalTime(),
      this.getUser()
    ]);

    return {
      stats,
      user
    };
  }

  static async getTotalTime(): Promise<WakaTimeStats | null> {
    try {
      const apiKey = process.env.WAKATIME_API_KEY;
      if (!apiKey) {
        console.error('WakaTime API key not found');
        return null;
      }

      console.log('WakaTime API Key:', `${apiKey.substring(0, 10)}...`);
      
      const response = await fetch(`${this.BASE_URL}/users/current/stats/all_time`, {
        headers: {
          'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        cache: 'force-cache'
      });

      console.log('WakaTime API Response Status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('WakaTime API error:', response.status, response.statusText, errorText);
        return null;
      }

      const data: WakaTimeResponse = await response.json();
      console.log('WakaTime API Response:', data);
      
      // Verificar se os dados estão disponíveis
      if (data.data && data.data.total_seconds !== undefined) {
        return data.data;
      }
      
      // Se está com status pending_update, retornar dados indicando que está calculando
      if (data.status === 'pending_update' && data.human_readable_range) {
        console.log('WakaTime stats are still calculating...');
        return {
          total_seconds: 0,
          human_readable_total: 'Calculating...',
          daily_average: 0,
          human_readable_daily_average: 'Calculating...'
        };
      }
      
      console.log('WakaTime data not available yet');
      return null;
    } catch (error) {
      console.error('Error fetching WakaTime stats:', error);
      return null;
    }
  }

  static formatTotalTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    return `${hours.toLocaleString()} hrs`;
  }
}
