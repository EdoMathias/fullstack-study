class AppConfig {
  // Backend urls:
  public readonly teamsUrl = 'http://localhost:4000/api/teams/';
  public readonly meetingsByTeamUrl =
    'http://localhost:4000/api/meetings-by-team/';
  public readonly meetingsUrl = 'http://localhost:4000/api/meetings/';

  //Axios options:
  public readonly axiosOptions = {
    headers: {
      // Tell axios to also send the image:
      'Content-Type': 'multipart/form-data', // We're sending also files.
    },
  };
}

export const appConfig = new AppConfig();
