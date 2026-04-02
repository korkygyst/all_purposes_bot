import { useState, useCallback } from 'react';
import { Banner, BannerFilters } from '../types/banner';
import { bannersApi } from '../api/bannersApi';

export function useBanners() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (filters: BannerFilters = {}) => {
    setLoading(true);
    try {
      const data = await bannersApi.fetchBanners(filters);
      setBanners(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const applyFilters = useCallback(
    (filters: BannerFilters) => load(filters),
    [load]
  );

  const resetFilters = useCallback(() => load({}), [load]);

  const toggleStatus = useCallback(async (id: string) => {
    const updated = await bannersApi.toggleStatus(id);
    setBanners((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
  }, []);

  return { banners, loading, load, applyFilters, resetFilters, toggleStatus };
}
