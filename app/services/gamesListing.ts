import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import { API_KEY } from 'app/config/api-config';

export default function gamesListing(pageNumber: string) {
  return apiClient.get(
    `${ApiConfig.GAMES}?key=${API_KEY}&page=${pageNumber}&page_size=20`,
  );
}
