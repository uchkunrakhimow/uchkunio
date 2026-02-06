export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface GitHubContributionsResponse {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

export const fetchGitHubContributions = async (username: string, year: string = 'last'): Promise<ContributionDay[]> => {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub contributions');
  }

  const data: GitHubContributionsResponse = await response.json();
  return data.contributions || [];
};
