const { getUniqueCompaniesAndRoles } = require('./helpers');

describe('getUniqueCompaniesAndRoles', () => {
  it('should return an array of companies and roles, NOT deduped', () => {
    const experiences = [
      {
        position: 'CEO',
        company: 'BMW',
        startDate: '2020/01',
        current: true,
      },
      {
        position: 'CEO',
        company: 'Audi',
        startDate: '2000/01',
        endDate: '2020/01',
      },
      {
        position: 'CFO',
        company: 'Audi',
        startDate: '1995/01',
        endDate: '2000/01',
      },
    ];

    expect(getUniqueCompaniesAndRoles(experiences)).toMatchInlineSnapshot(`
[
  "BMW",
  "Audi",
  "CEO",
  "CFO",
]
`);
  });
});
