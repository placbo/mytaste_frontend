import { useState, useEffect } from 'react';
import { getTags } from '../api/api.js';
import { TagWithUsageCount } from '../types.js';

export function useTags() {
  const [tags, setTags] = useState<TagWithUsageCount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      setError(undefined);
      try {
        const result = await getTags(setError, setLoading);
        if (result) {
          setTags(result);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  // Helper function to get top N most used tags
  const getTopTags = (count: number = 10) => {
    return tags
      .sort((a: TagWithUsageCount, b: TagWithUsageCount) => b.usageCount - a.usageCount)
      .slice(0, count);
  };

  return {
    tags,
    loading,
    error,
    getTopTags,
  };
}
