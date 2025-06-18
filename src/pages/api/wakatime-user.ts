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
    const user = await WakaTimeService.getUser();
    
    if (!user) {
      return res.status(500).json({ error: 'Failed to fetch WakaTime user' });
    }

    // Cache por 1 hora
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=1800');
    
    return res.status(200).json(user);
  } catch (error) {
    console.error('WakaTime User API route error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
