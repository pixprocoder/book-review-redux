export const getBaseUrl = (): string => {
  return (
    import.meta.env.VITE_PUBLIC_API_BASE_URL || "http://localhost:3000/api/v1"
  );
};
