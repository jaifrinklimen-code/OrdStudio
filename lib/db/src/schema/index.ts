import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Templates table
export const templatesTable = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title"),
  description: text("description"),
  category: text("category").notNull(),
  subcategory: text("subcategory"),
  size: text("size").notNull(),
  thumbnail: text("thumbnail"),
  previewImage: text("preview_image"),
  canvasWidth: integer("canvas_width").default(1080),
  canvasHeight: integer("canvas_height").default(1080),
  orientation: text("orientation").default("landscape"),
  tags: jsonb("tags"),
  author: text("author").default("ORD Studio"),
  premium: boolean("premium").default(false).notNull(),
  isPublished: boolean("is_published").default(true).notNull(),
  likes: integer("likes").default(0).notNull(),
  views: integer("views").default(0).notNull(),
  gradient: text("gradient").notNull(),
  elements: jsonb("elements"),
  slides: jsonb("slides"),
  background: jsonb("background"),
  fonts: jsonb("fonts"),
  colors: jsonb("colors"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertTemplateSchema = createInsertSchema(templatesTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectTemplateSchema = createSelectSchema(templatesTable);
export type Template = typeof templatesTable.$inferSelect;
export type InsertTemplate = typeof insertTemplateSchema["_output"];

// Projects table (User Designs)
export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  gradient: text("gradient").notNull(),
  progress: integer("progress").default(0).notNull(),
  templateId: integer("template_id"),
  pages: jsonb("pages"),
  elements: jsonb("elements"),
  dimensions: jsonb("dimensions"),
  thumbnail: text("thumbnail"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertProjectSchema = createInsertSchema(projectsTable).omit({ id: true, createdAt: true, updatedAt: true });
export const selectProjectSchema = createSelectSchema(projectsTable);
export type Project = typeof projectsTable.$inferSelect;
export type InsertProject = typeof insertProjectSchema["_output"];

// Stickers table
export const stickersTable = pgTable("stickers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  style: text("style").notNull(),
  gradient: text("gradient").notNull(),
  symbol: text("symbol").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertStickerSchema = createInsertSchema(stickersTable).omit({ id: true, createdAt: true });
export const selectStickerSchema = createSelectSchema(stickersTable);
export type Sticker = typeof stickersTable.$inferSelect;
export type InsertSticker = typeof insertStickerSchema["_output"];

// Contact Submissions table
export const contactSubmissionsTable = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  userId: text("user_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissionsTable).omit({ id: true, createdAt: true });
export const selectContactSubmissionSchema = createSelectSchema(contactSubmissionsTable);
export type ContactSubmission = typeof contactSubmissionsTable.$inferSelect;
export type InsertContactSubmission = typeof insertContactSubmissionSchema["_output"];

// Blog Posts table
export const blogPostsTable = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  tagsText: text("tags_text").notNull(), // comma-separated tags
  author: text("author").notNull(),
  publishedDate: text("published_date").notNull(),
  readingTime: text("reading_time").notNull(),
  heroGradient: text("hero_gradient").notNull(),
  imageUrl: text("image_url"),
  content: text("content").notNull(),
  likes: integer("likes").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPostsTable).omit({ id: true, createdAt: true });
export const selectBlogPostSchema = createSelectSchema(blogPostsTable);
export type BlogPost = typeof blogPostsTable.$inferSelect;

// Blog Comments table
export const blogCommentsTable = pgTable("blog_comments", {
  id: serial("id").primaryKey(),
  postSlug: text("post_slug").notNull(),
  authorName: text("author_name").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBlogCommentSchema = createInsertSchema(blogCommentsTable).omit({ id: true, createdAt: true });
export const selectBlogCommentSchema = createSelectSchema(blogCommentsTable);
export type BlogComment = typeof blogCommentsTable.$inferSelect;