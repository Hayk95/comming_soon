const API_BASE =
  process.env.NEXT_PUBLIC_UGC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:4000';

export type SubscribeResponse = {
  ok: boolean;
  email: string;
  alreadySubscribed: boolean;
  emailSent: boolean;
  message?: string;
};

export type SubscribeError = {
  error: string;
};

export async function subscribeComingSoon(email: string): Promise<SubscribeResponse> {
  const res = await fetch(`${API_BASE}/api/v1/coming-soon/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const data = (await res.json()) as SubscribeResponse & SubscribeError;

  if (!res.ok) {
    throw new Error(data.error ?? 'Չհաջողվեց գրանցվել։ Փորձեք կրկին։');
  }

  return data;
}
