module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'concepts/introduction/what-is-namek',
        'concepts/introduction/lenders',
        'concepts/introduction/positions',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/smart-contracts',
        'reference/deployments',
        {
          type: 'category',
          label: 'Core',
          items: [
            {
              type: 'category',
              label: 'Libraries',
              items: [
                'reference/core/libraries/CollateralMath',
              ]
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                'reference/core/interfaces/ILender',
                'reference/core/interfaces/ILenderFactory',
                'reference/core/interfaces/ILiquidateCallback',
                'reference/core/interfaces/IOracle',
              ]
            },
            'reference/core/Lender',
            'reference/core/LenderFactory',
            'reference/core/Oracle',
          ]
        },
      ],
    }
  ],
};