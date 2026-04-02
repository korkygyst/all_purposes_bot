import { Banner, BannerFilters } from '../types/banner';

const MOCK_BANNERS: Banner[] = [
  { id: 'bnr-001', titleKey: 'banner.main.promo.summer', placeholder: 'main', status: 'Activated', priorityLevel: 'High', startAt: '2025-06-01', endAt: '2025-08-31', audienceType: 'ALL', audienceSize: 0, impressions: 45200, clicks: 6780, createdAt: '2025-05-15T10:00:00Z' },
  { id: 'bnr-002', titleKey: 'banner.shtorka.cashback.promo', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'High', startAt: '2025-05-01', endAt: '2025-12-31', audienceType: 'WALLET_IDS', audienceSize: 15000, impressions: 14800, clicks: 2100, createdAt: '2025-04-28T08:30:00Z' },
  { id: 'bnr-003', titleKey: 'banner.main.new.feature', placeholder: 'main', status: 'Deactivated', priorityLevel: 'High', startAt: '2025-03-01', endAt: '2025-04-30', audienceType: 'ALL', audienceSize: 0, impressions: 32000, clicks: 480, createdAt: '2025-02-20T12:00:00Z' },
  { id: 'bnr-004', titleKey: 'banner.main.referral.program', placeholder: 'main', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-04-15', endAt: '2025-07-15', audienceType: 'ALL', audienceSize: 0, impressions: 21500, clicks: 1290, createdAt: '2025-04-10T09:00:00Z' },
  { id: 'bnr-005', titleKey: 'banner.shtorka.loyalty.offer', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-05-10', audienceType: 'WALLET_IDS', audienceSize: 5200, impressions: 5100, clicks: 612, createdAt: '2025-05-08T14:00:00Z' },
  { id: 'bnr-006', titleKey: 'banner.main.deposit.bonus', placeholder: 'main', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-06-01', endAt: '2025-06-30', audienceType: 'WALLET_IDS', audienceSize: 8800, impressions: 8750, clicks: 950, createdAt: '2025-05-25T11:00:00Z' },
  { id: 'bnr-007', titleKey: 'banner.shtorka.survey.2025', placeholder: 'shtorka', status: 'Deactivated', priorityLevel: 'Medium', startAt: '2025-01-10', endAt: '2025-02-10', audienceType: 'ALL', audienceSize: 0, impressions: 67000, clicks: 2010, createdAt: '2025-01-05T07:00:00Z' },
  { id: 'bnr-008', titleKey: 'banner.main.update.notice', placeholder: 'main', status: 'Activated', priorityLevel: 'Low', startAt: '2025-05-20', audienceType: 'ALL', audienceSize: 0, impressions: 12300, clicks: 123, createdAt: '2025-05-18T16:00:00Z' },
  { id: 'bnr-009', titleKey: 'banner.shtorka.help.center', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Low', audienceType: 'ALL', audienceSize: 0, impressions: 9800, clicks: 98, createdAt: '2025-04-01T10:00:00Z' },
  { id: 'bnr-010', titleKey: 'banner.main.terms.update', placeholder: 'main', status: 'Deactivated', priorityLevel: 'Low', startAt: '2025-02-01', endAt: '2025-03-01', audienceType: 'ALL', audienceSize: 0, impressions: 41000, clicks: 410, createdAt: '2025-01-28T09:30:00Z' },
  { id: 'bnr-011', titleKey: 'banner.main.winter.sale', placeholder: 'main', status: 'Deactivated', priorityLevel: 'High', startAt: '2024-12-01', endAt: '2025-01-10', audienceType: 'ALL', audienceSize: 0, impressions: 88000, clicks: 14080, createdAt: '2024-11-25T08:00:00Z' },
  { id: 'bnr-012', titleKey: 'banner.shtorka.vip.access', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'High', startAt: '2025-06-15', audienceType: 'WALLET_IDS', audienceSize: 3000, impressions: 2950, clicks: 590, createdAt: '2025-06-10T10:00:00Z' },
  { id: 'bnr-013', titleKey: 'banner.main.partnership.offer', placeholder: 'main', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-05-01', endAt: '2025-09-01', audienceType: 'ALL', audienceSize: 0, impressions: 17200, clicks: 688, createdAt: '2025-04-25T13:00:00Z' },
  { id: 'bnr-014', titleKey: 'banner.shtorka.notification.promo', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Low', audienceType: 'ALL', audienceSize: 0, impressions: 6700, clicks: 67, createdAt: '2025-03-15T11:00:00Z' },
  { id: 'bnr-015', titleKey: 'banner.main.birthday.bonus', placeholder: 'main', status: 'Activated', priorityLevel: 'Medium', audienceType: 'WALLET_IDS', audienceSize: 12000, impressions: 11800, clicks: 2360, createdAt: '2025-05-30T09:00:00Z' },
  { id: 'bnr-016', titleKey: 'banner.shtorka.security.alert', placeholder: 'shtorka', status: 'Deactivated', priorityLevel: 'High', startAt: '2025-03-10', endAt: '2025-03-20', audienceType: 'ALL', audienceSize: 0, impressions: 95000, clicks: 8550, createdAt: '2025-03-08T06:00:00Z' },
  { id: 'bnr-017', titleKey: 'banner.main.spring.promo', placeholder: 'main', status: 'Deactivated', priorityLevel: 'Medium', startAt: '2025-03-01', endAt: '2025-05-31', audienceType: 'ALL', audienceSize: 0, impressions: 28000, clicks: 840, createdAt: '2025-02-25T10:00:00Z' },
  { id: 'bnr-018', titleKey: 'banner.shtorka.app.rate', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Low', audienceType: 'WALLET_IDS', audienceSize: 7500, impressions: 7400, clicks: 148, createdAt: '2025-04-18T14:00:00Z' },
  { id: 'bnr-019', titleKey: 'banner.main.crypto.promo', placeholder: 'main', status: 'Activated', priorityLevel: 'High', startAt: '2025-06-01', audienceType: 'ALL', audienceSize: 0, impressions: 5400, clicks: 1080, createdAt: '2025-05-28T12:00:00Z' },
  { id: 'bnr-020', titleKey: 'banner.shtorka.top.up.offer', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-04-01', audienceType: 'WALLET_IDS', audienceSize: 22000, impressions: 21500, clicks: 3010, createdAt: '2025-03-28T09:00:00Z' },
  { id: 'bnr-021', titleKey: 'banner.main.insurance.info', placeholder: 'main', status: 'Deactivated', priorityLevel: 'Low', startAt: '2025-01-01', endAt: '2025-01-31', audienceType: 'ALL', audienceSize: 0, impressions: 34000, clicks: 340, createdAt: '2024-12-28T10:00:00Z' },
  { id: 'bnr-022', titleKey: 'banner.shtorka.earn.more', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'High', startAt: '2025-05-15', audienceType: 'WALLET_IDS', audienceSize: 4500, impressions: 4400, clicks: 880, createdAt: '2025-05-12T08:00:00Z' },
  { id: 'bnr-023', titleKey: 'banner.main.new.year.2025', placeholder: 'main', status: 'Deactivated', priorityLevel: 'High', startAt: '2024-12-25', endAt: '2025-01-05', audienceType: 'ALL', audienceSize: 0, impressions: 120000, clicks: 18000, createdAt: '2024-12-20T09:00:00Z' },
  { id: 'bnr-024', titleKey: 'banner.shtorka.rewards.program', placeholder: 'shtorka', status: 'Activated', priorityLevel: 'Medium', startAt: '2025-06-01', audienceType: 'ALL', audienceSize: 0, impressions: 3200, clicks: 352, createdAt: '2025-05-29T11:00:00Z' },
  { id: 'bnr-025', titleKey: 'banner.main.support.chat', placeholder: 'main', status: 'Activated', priorityLevel: 'Low', audienceType: 'ALL', audienceSize: 0, impressions: 8900, clicks: 89, createdAt: '2025-02-10T10:00:00Z' },
];

const PRIORITY_ORDER: Record<string, number> = { High: 0, Medium: 1, Low: 2 };

function applyDefaultSort(banners: Banner[]): Banner[] {
  return [...banners].sort((a, b) => {
    const pd = PRIORITY_ORDER[a.priorityLevel] - PRIORITY_ORDER[b.priorityLevel];
    if (pd !== 0) return pd;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

function applyFilters(banners: Banner[], filters: BannerFilters): Banner[] {
  return banners.filter((b) => {
    if (filters.placeholder && b.placeholder !== filters.placeholder) return false;
    if (filters.status && b.status !== filters.status) return false;
    if (filters.priorityLevel && b.priorityLevel !== filters.priorityLevel) return false;
    if (filters.audienceType && b.audienceType !== filters.audienceType) return false;
    if (filters.titleKey && !b.titleKey.toLowerCase().includes(filters.titleKey.toLowerCase())) return false;
    if (filters.createdAtRange) {
      const created = new Date(b.createdAt).getTime();
      const from = new Date(filters.createdAtRange[0]).getTime();
      const to = new Date(filters.createdAtRange[1]).getTime();
      if (created < from || created > to) return false;
    }
    return true;
  });
}

let bannerStore: Banner[] = [...MOCK_BANNERS];

export const bannersApi = {
  fetchBanners: (filters: BannerFilters): Promise<Banner[]> =>
    new Promise((resolve) =>
      setTimeout(() => resolve(applyDefaultSort(applyFilters(bannerStore, filters))), 600)
    ),

  toggleStatus: (id: string): Promise<Banner> =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        const idx = bannerStore.findIndex((b) => b.id === id);
        if (idx === -1) return reject(new Error('Not found'));
        bannerStore[idx] = {
          ...bannerStore[idx],
          status: bannerStore[idx].status === 'Activated' ? 'Deactivated' : 'Activated',
        };
        resolve(bannerStore[idx]);
      }, 300)
    ),
};
