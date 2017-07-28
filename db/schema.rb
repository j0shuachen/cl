# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170728165242) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "user_id", null: false
    t.integer "group_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_comments_on_event_id"
    t.index ["group_id"], name: "index_comments_on_group_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "event_enrollments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_enrollments_on_event_id"
    t.index ["user_id"], name: "index_event_enrollments_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.integer "group_id", null: false
    t.integer "user_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url", default: "http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif"
    t.index ["group_id"], name: "index_events_on_group_id"
    t.index ["location"], name: "index_events_on_location"
    t.index ["name"], name: "index_events_on_name"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "group_enrollments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "group_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_group_enrollments_on_group_id"
    t.index ["user_id"], name: "index_group_enrollments_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.text "info", null: false
    t.string "location", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url", default: "http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif"
    t.index ["location"], name: "index_groups_on_location"
    t.index ["name"], name: "index_groups_on_name"
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "public_profiles", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.integer "age"
    t.date "bdate"
    t.string "location"
    t.integer "user_id", null: false
    t.text "bio"
    t.string "photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_public_profiles_on_user_id", unique: true
  end

  create_table "tag_event_enrollments", force: :cascade do |t|
    t.integer "tag_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_tag_event_enrollments_on_event_id"
    t.index ["tag_id"], name: "index_tag_event_enrollments_on_tag_id"
  end

  create_table "tag_group_enrollments", force: :cascade do |t|
    t.integer "tag_id"
    t.integer "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_tag_group_enrollments_on_group_id"
    t.index ["tag_id"], name: "index_tag_group_enrollments_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location", null: false
    t.string "email", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
