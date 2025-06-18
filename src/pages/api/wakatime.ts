import { NextApiRequest, NextApiResponse } from 'next';
import { WakaTimeService } from '@/services/wakatime';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stats = await WakaTimeService.getTotalTime();
    
    if (!stats) {
      return res.status(500).json({ error: 'Failed to fetch WakaTime stats' });
    }

    // Cache por 1 hora
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=1800');
    
    return res.status(200).json(stats);
  } catch (error) {
    console.error('WakaTime API route error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
