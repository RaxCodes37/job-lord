export interface JobPost {
  postId: string;
  postTitle: string;
  postDescription: string;
  company: string;
  postCreator: string;
}

export interface JobApplication {
  applicationId: string;
  applicantName: string;
  applicantEmail: string;
  applicantMessage: string;
  applicantId: string;
  postAppliedFor: string;
}
