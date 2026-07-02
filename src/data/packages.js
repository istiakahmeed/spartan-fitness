const packages = [
  {
    id: 1,
    name: "Basic",
    price: "29",
    billing: "/month",
    features: [
      "Gym access 5 days/week",
      "Standard equipment access",
      "Locker room & showers",
      "Free Wi-Fi",
      "1 fitness assessment per year",
    ],
    isFeatured: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "59",
    billing: "/month",
    features: [
      "Unlimited gym access",
      "All equipment & zones",
      "Locker room & premium showers",
      "4 personal training sessions/month",
      "Nutrition consultation",
      "Free guest passes",
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: "Elite",
    price: "99",
    billing: "/month",
    features: [
      "24/7 gym access",
      "VIP equipment & private zone",
      "Unlimited personal training",
      "Custom meal plans",
      "Monthly body composition analysis",
      "Recovery suite access",
      "Priority class booking",
    ],
    isFeatured: false,
  },
];

export default packages;
