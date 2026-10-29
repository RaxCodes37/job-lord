CREATE INDEX "title_search_index" ON "job_posts" USING gin (to_tsvector('english',
    "post_title"));