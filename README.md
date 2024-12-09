# MongoDB Aggregation Pipeline Error: Unwind with No Matches

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines after a `$lookup` operation.  If no matching documents are found during the `$lookup` stage, `$unwind` will throw an error.  This example shows the problem and a solution.

## Bug
The `bug.js` file contains a pipeline that performs a `$lookup` to join two collections. The `$unwind` stage then attempts to process the results. When no matching documents are found in the joined collection, `$unwind` will throw an error because it cannot unwind an empty array.

## Solution
The `solution.js` file provides a solution by adding a `$ifNull` operator to handle cases where no matches are found. This operator provides a default value when the `results` array is empty.