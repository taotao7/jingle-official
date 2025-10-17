"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const jobsQueryKey = (locale) => ["jobs", locale];

export const useJobs = (locale) => {
  return useQuery({
    queryKey: jobsQueryKey(locale),
    queryFn: async () => {
      const res = await fetch(`/api/jobs?locale=${locale}`);
      if (!res.ok) {
        throw new Error("Failed to load jobs");
      }
      return res.json();
    },
  });
};

export const useUpsertJob = (locale) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload) => {
      const res = await fetch(`/api/jobs?locale=${locale}`, {
        method: payload.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, locale }),
      });
      if (!res.ok) {
        const error = await res.json().catch(() => ({ error: "Failed" }));
        throw new Error(error.error || "Failed to save job");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: jobsQueryKey(locale) });
    },
  });
};

export const useDeleteJob = (locale) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/jobs/${id}?locale=${locale}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const error = await res.json().catch(() => ({ error: "Failed" }));
        throw new Error(error.error || "Failed to delete job");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: jobsQueryKey(locale) });
    },
  });
};
