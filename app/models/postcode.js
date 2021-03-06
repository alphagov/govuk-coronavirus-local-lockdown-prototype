'use strict'

const mongoose = require('mongoose')
// const mongooseFuzzySearching = require('mongoose-fuzzy-searching')

const Schema = mongoose.Schema

const PostcodeSchema = new Schema({
  postcode: { type: String, required: true, unique: true, uppercase: true, trim: true },
  postcode_key: { type: String, required: true, unique: true, uppercase: true, trim: true },
  postcode_area: String,
  postcode_district: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  easting: Number,
  northing: Number,
  grid_ref: String,
  country: String,
  county: String,
  county_code: String,
  district: String,
  district_code: String,
  ward: String,
  ward_code: String,
  constituency: String,
  constituency_code: String,
  region: String,
  parish: String,
  parish_code: String,
  built_up_area: String,
  built_up_sub_division: String,
  census_output_area: String,
  lower_layer_super_output_area: String,
  lsoa_code: String,
  middle_layer_super_output_area: String,
  msoa_code: String,
  london_zone: Number,
  local_authority: String,
  plus_code: String,
  in_use: Boolean,
  introduced: Date,
  terminated: Date,
  last_updated: Date
})

// PostcodeSchema.plugin(mongooseFuzzySearching, { fields: ['district', 'postcode'] })

module.exports = mongoose.model('Postcode', PostcodeSchema)
