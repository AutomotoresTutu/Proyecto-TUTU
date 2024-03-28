const versionSchema = new Schema({
    nombreVersion: String,
    anioFabr: { type: Schema.Types.ObjectId, ref: 'AnioFabr' },
}, {
    timestamps: true
});

const Version = mongoose.model('Version', versionSchema);
export default Version;
