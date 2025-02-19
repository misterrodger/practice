const {pipe, map, pick, reduce, uniq} = require('lodash/fp');

function getUniqueCompaniesAndRoles(arr) {
  const { company, position } = pipe(
    map(pick(['company', 'position'])),
    reduce(
      (acc, curr) => {
        return {
          company: uniq([...acc.company, curr.company]),
          position: uniq([...acc.position, curr.position]),
        };
      },
      { company: [], position: [] },
    ),
  )(arr);

  return [...company, ...position];
}

module.exports = {
  getUniqueCompaniesAndRoles
}