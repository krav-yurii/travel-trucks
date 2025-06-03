export const filtersCheckBoxConfig = {
  equipment: [
    { iconPath: 'filter-ico-ac.svg', text: 'AC', fieldName: 'AC', value: { AC: true } },
    {
      iconPath: 'filter-ico-automatic.svg',
      text: 'Automatic',
      fieldName: 'transmission',
      value: { transmission: 'automatic' },
    },
    { iconPath: 'filter-ico-kitchen.svg', text: 'Kitchen', fieldName: 'kitchen', value: { kitchen: true } },
    { iconPath: 'filter-ico-tv.svg', text: 'TV', fieldName: 'TV', value: { TV: true } },
    {
      iconPath: 'filter-ico-bathroom.svg',
      text: 'Bathroom',
      fieldName: 'bathroom',
      value: { bathroom: true },
    },
  ],
  vehicle_types: [
    {
      iconPath: 'filter-ico-van.svg',
      text: 'Van',
      fieldName: 'form',
      value: 'panelTruck',
    },
    {
      iconPath: 'filter-ico-integrated.svg',
      text: 'Fully Integrated',
      fieldName: 'form',
      value: 'fullyIntegrated',
    },
    {
      iconPath: 'filter-ico-alcove.svg',
      text: 'Alcove',
      fieldName: 'form',
      value: 'alcove',
    },
  ],
};
