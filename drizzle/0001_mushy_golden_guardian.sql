CREATE TABLE "job_application" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"applicant_name" text,
	"applicant_id" text,
	"post_applied_for" uuid
);
--> statement-breakpoint
CREATE TABLE "job_posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"post_title" varchar(100) NOT NULL,
	"post_description" text NOT NULL,
	"company" varchar(50) NOT NULL,
	"post_creator_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "job_application" ADD CONSTRAINT "job_application_applicant_name_user_name_fk" FOREIGN KEY ("applicant_name") REFERENCES "public"."user"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_application" ADD CONSTRAINT "job_application_applicant_id_user_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_application" ADD CONSTRAINT "job_application_post_applied_for_job_posts_id_fk" FOREIGN KEY ("post_applied_for") REFERENCES "public"."job_posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_post_creator_id_user_id_fk" FOREIGN KEY ("post_creator_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;