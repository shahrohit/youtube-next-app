export const category = [
  "All",
  "New",
  "Music",
  "Hindi Songs",
  "c++ language",
  "python",
  "Computer Science",
  "Physics",
  "AI",
  "History",
  "comedy",
  "Lo-fi",
];


export type Video={
    kind:string,
    id:{
      kind:string,
      videoId:string
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails:{ 
            medium:{url:string},
            high:string,
            default:string
        },
    
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: string
    }
  
  }