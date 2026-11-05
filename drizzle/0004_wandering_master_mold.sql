ALTER TABLE "job_application" ADD COLUMN "applicant_email" text;--> statement-breakpoint
ALTER TABLE "job_application" ADD COLUMN "applicant_message" text;--> statement-breakpoint
ALTER TABLE "job_application" ADD CONSTRAINT "job_application_applicant_email_user_email_fk" FOREIGN KEY ("applicant_email") REFERENCES "public"."user"("email") ON DELETE no action ON UPDATE no action;