/*
    Client representation of state and state messages. See: https://github.com/galaxyproject/galaxy/blob/dev/lib/galaxy/model/__init__.py#L3292
    for a list of available states.
*/
export const STATES = {
    /** deleted while uploading */
    discarded: {
        status: "danger",
        text: "This dataset is discarded - the job creating it may have been cancelled or it may have been imported without file data.",
        icon: "exclamation-triangle",
    },
    deferred: {
        status: "info",
        text: "This dataset is remote, has not be ingested by Galaxy, and full metadata may not be available.",
        icon: "cloud",
    },
    /** has no data */
    empty: {
        status: "success",
        text: "No data.",
    },
    /** the tool producing this dataset has errored */
    error: {
        status: "danger",
        text: "An error occurred with this dataset:",
        icon: "exclamation-triangle",
    },
    /** the dataset has failed */
    failed: {
        status: "danger",
        icon: "exclamation-triangle",
    },
    /** metadata discovery/setting failed or errored (but otherwise ok) */
    failed_metadata: {
        status: "danger",
        icon: "exclamation-triangle",
    },
    /** was created without a tool */
    new: {
        status: "warning",
        text: "This is a new dataset and not all of its data are available yet.",
        icon: "clock",
    },
    /** has successfully completed running */
    ok: {
        status: "success",
    },
    /** the job that will produce the dataset paused */
    paused: {
        status: "info",
        text: "This job is paused. Use the 'Resume Paused Jobs' in the history menu to resume.",
        icon: "pause",
    },
    /** the job that will produce the dataset queued in the runner */
    queued: {
        status: "warning",
        text: "This job is waiting to run.",
        icon: "clock",
    },
    /** the job that will produce the dataset is running */
    running: {
        status: "warning",
        text: "This job is currently running.",
        icon: "spinner",
        spin: true,
    },
    /** metadata for the dataset is being discovered/set */
    setting_metadata: {
        status: "warning",
        text: "Metadata is being auto-detected.",
        icon: "spinner",
        spin: true,
    },
    /** is uploading and not ready */
    upload: {
        status: "warning",
        text: "This dataset is currently uploading.",
        icon: "spinner",
        spin: true,
    },
};

/** For collections it is necessary to reduce the available states of the collection items to a single state which
 * can be displayed to represent the collection itself. The order matters.
 */
export const STATES_REDUCE = ["error", "failed", "queued", "upload", "running", "paused"];
