const { Schema, model } = require('mongoose');
const { reactionSchema } = require ('./Reaction');
const dateFormat = require ('../utils/dateFormat")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlegth: 1,
            maxlength: 280
            ')}