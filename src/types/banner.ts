export type Placeholder = 'main' | 'shtorka';
export type BannerStatus = 'Activated' | 'Deactivated';
export type PriorityLevel = 'High' | 'Medium' | 'Low';
export type AudienceType = 'ALL' | 'WALLET_IDS';

export interface Banner {
  id: string;
  titleKey: string;
  placeholder: Placeholder;
  status: BannerStatus;
  priorityLevel: PriorityLevel;
  startAt?: string;
  endAt?: string;
  audienceType: AudienceType;
  audienceSize: number;
  impressions: number;
  clicks: number;
  createdAt: string;
}

export interface BannerFilters {
  placeholder?: Placeholder;
  status?: BannerStatus;
  priorityLevel?: PriorityLevel;
  audienceType?: AudienceType;
  createdAtRange?: [string, string];
  titleKey?: string;
}
