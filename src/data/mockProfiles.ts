export interface Profile {
  id: string;
  name: string;
  age: number;
  country: string;
  city: string;
  photo: string;
  isOnline: boolean;
  isVerified: boolean;
  lastSeen: string;
  description: string;
  hasPhoto: boolean;
  joinedDate: string;
}

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Amara',
    age: 28,
    country: 'Nigeria',
    city: 'Lagos',
    photo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: true,
    lastSeen: 'Online now',
    description: 'Love traveling and meeting new people. Looking for genuine connections and meaningful conversations.',
    hasPhoto: true,
    joinedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Kemi',
    age: 31,
    country: 'Ghana',
    city: 'Accra',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: true,
    lastSeen: '2 hours ago',
    description: 'Entrepreneur and fitness enthusiast. Passionate about personal growth and adventure.',
    hasPhoto: true,
    joinedDate: '2024-02-20'
  },
  {
    id: '3',
    name: 'Zara',
    age: 26,
    country: 'Kenya',
    city: 'Nairobi',
    photo: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: false,
    lastSeen: 'Online now',
    description: 'Artist and creative soul. Love music, art, and deep conversations under the stars.',
    hasPhoto: true,
    joinedDate: '2024-03-10'
  },
  {
    id: '4',
    name: 'Fatima',
    age: 29,
    country: 'Morocco',
    city: 'Casablanca',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: true,
    lastSeen: '1 day ago',
    description: 'Teacher and book lover. Seeking someone who appreciates culture and intellectual discussions.',
    hasPhoto: true,
    joinedDate: '2024-01-28'
  },
  {
    id: '5',
    name: 'Thandiwe',
    age: 33,
    country: 'South Africa',
    city: 'Cape Town',
    photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: true,
    lastSeen: 'Online now',
    description: 'Wine enthusiast and nature lover. Looking for someone to explore the world with.',
    hasPhoto: true,
    joinedDate: '2024-02-14'
  },
  {
    id: '6',
    name: 'Aisha',
    age: 25,
    country: 'Tanzania',
    city: 'Dar es Salaam',
    photo: 'https://images.pexels.com/photos/3771107/pexels-photo-3771107.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: false,
    lastSeen: '3 hours ago',
    description: 'Medical student with a passion for helping others. Love cooking and spending time with family.',
    hasPhoto: true,
    joinedDate: '2024-03-05'
  },
  {
    id: '7',
    name: 'Nkechi',
    age: 30,
    country: 'Nigeria',
    city: 'Abuja',
    photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: true,
    lastSeen: 'Online now',
    description: 'Tech professional and yoga instructor. Seeking balance and meaningful connections.',
    hasPhoto: true,
    joinedDate: '2024-01-22'
  },
  {
    id: '8',
    name: 'Aaliyah',
    age: 27,
    country: 'Egypt',
    city: 'Cairo',
    photo: 'https://images.pexels.com/photos/3775129/pexels-photo-3775129.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: true,
    lastSeen: '5 hours ago',
    description: 'Photographer and travel blogger. Capturing beautiful moments and seeking beautiful connections.',
    hasPhoto: true,
    joinedDate: '2024-02-08'
  },
  {
    id: '9',
    name: 'Imani',
    age: 24,
    country: 'Rwanda',
    city: 'Kigali',
    photo: 'https://images.pexels.com/photos/3763183/pexels-photo-3763183.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: false,
    lastSeen: 'Online now',
    description: 'Environmental scientist passionate about sustainability. Love hiking and outdoor adventures.',
    hasPhoto: true,
    joinedDate: '2024-03-18'
  },
  {
    id: '10',
    name: 'Safiya',
    age: 32,
    country: 'Senegal',
    city: 'Dakar',
    photo: 'https://images.pexels.com/photos/3763077/pexels-photo-3763077.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: true,
    lastSeen: '12 hours ago',
    description: 'Fashion designer with a love for traditional and modern styles. Seeking creativity and romance.',
    hasPhoto: true,
    joinedDate: '2024-01-30'
  },
  {
    id: '11',
    name: 'Bintou',
    age: 28,
    country: 'Mali',
    city: 'Bamako',
    photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
    isVerified: true,
    lastSeen: 'Online now',
    description: 'Chef and food enthusiast. Love creating memorable experiences through cuisine.',
    hasPhoto: true,
    joinedDate: '2024-02-25'
  },
  {
    id: '12',
    name: 'Maryam',
    age: 26,
    country: 'Ethiopia',
    city: 'Addis Ababa',
    photo: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: false,
    isVerified: false,
    lastSeen: '8 hours ago',
    description: 'Nurse and community volunteer. Believe in kindness and making a positive difference.',
    hasPhoto: true,
    joinedDate: '2024-03-12'
  }
];

export const countries = [
  'All Countries',
  'Nigeria',
  'Ghana',
  'Kenya',
  'South Africa',
  'Morocco',
  'Egypt',
  'Tanzania',
  'Rwanda',
  'Senegal',
  'Mali',
  'Ethiopia',
  'Uganda',
  'Zimbabwe',
  'Botswana',
  'Namibia'
];