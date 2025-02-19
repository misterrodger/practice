const { Client } = require('@elastic/elasticsearch');
const esb = require('elastic-builder');

const client = new Client({
  node: 'http://localhost:9200'
})

const query = esb.boolQuery()
  .must(esb.termQuery('expertId', 1))  // must - contributes to score
  .must(esb.termsQuery('expertCountryId', undefined))  // terms - for an arr
  .filter(esb.termQuery('eplId', 1))  // filter - no scoring
  .mustNot(esb.rangeQuery('interviewDate').gte('2019-12-01T00:00:00Z').lte('2019-12-31T00:00:00Z'))

const query2 = esb.boolQuery()
  .must([
    true && esb.termQuery('expertId', 1)

  ].filter(Boolean))
// console.dir(query2, {depth: Infinity});

async function runQuery() {
  return client.search({
    index: 'interviews_test_index',
    query: query2
  })
}

runQuery().then(res => console.dir(res, {depth: Infinity})).catch(console.error)

class Builder {
  constructor() {}

  when(condition, cb) {
    if (condition) {
      return cb(this, condition)
    }
    return this
  }
}

const builder = new Builder();

// async function runQuery2(params) {
//   return builder.when(params, (esb, val) => esb.termQuery('expertId', params.expertId))
// }

// runQuery2({expertId: 1}).then(console.log).catch(console.error)




