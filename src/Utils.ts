export interface AudioSettings {
  voice: string;
  speed: string;
  pitch: string;
  music: string;
  volume: string;
}

export interface VideoSettings {
  scene: string;
}

export async function fetchSynthesizer(route: string, params?: { [key: string]: string; }) {
  const url = new URL('https://app-46b35yra7q-ew.a.run.app/' + route);
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, value);
    }
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('server error');
  }
  const text = await response.text();
  return text;
}
