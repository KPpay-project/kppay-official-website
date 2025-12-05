'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/types';

interface CountryCode {
  code: string;
  country: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: '+93', country: 'AF', name: 'Afghanistan' },
  { code: '+355', country: 'AL', name: 'Albania' },
  { code: '+213', country: 'DZ', name: 'Algeria' },
  { code: '+1-684', country: 'AS', name: 'American Samoa' },
  { code: '+376', country: 'AD', name: 'Andorra' },
  { code: '+244', country: 'AO', name: 'Angola' },
  { code: '+1-264', country: 'AI', name: 'Anguilla' },
  { code: '+672', country: 'AQ', name: 'Antarctica' },
  { code: '+1-268', country: 'AG', name: 'Antigua and Barbuda' },
  { code: '+54', country: 'AR', name: 'Argentina' },
  { code: '+374', country: 'AM', name: 'Armenia' },
  { code: '+297', country: 'AW', name: 'Aruba' },
  { code: '+61', country: 'AU', name: 'Australia' },
  { code: '+43', country: 'AT', name: 'Austria' },
  { code: '+994', country: 'AZ', name: 'Azerbaijan' },
  { code: '+1-242', country: 'BS', name: 'Bahamas' },
  { code: '+973', country: 'BH', name: 'Bahrain' },
  { code: '+880', country: 'BD', name: 'Bangladesh' },
  { code: '+1-246', country: 'BB', name: 'Barbados' },
  { code: '+375', country: 'BY', name: 'Belarus' },
  { code: '+32', country: 'BE', name: 'Belgium' },
  { code: '+501', country: 'BZ', name: 'Belize' },
  { code: '+229', country: 'BJ', name: 'Benin' },
  { code: '+1-441', country: 'BM', name: 'Bermuda' },
  { code: '+975', country: 'BT', name: 'Bhutan' },
  { code: '+591', country: 'BO', name: 'Bolivia' },
  { code: '+387', country: 'BA', name: 'Bosnia and Herzegovina' },
  { code: '+267', country: 'BW', name: 'Botswana' },
  { code: '+55', country: 'BR', name: 'Brazil' },
  { code: '+673', country: 'BN', name: 'Brunei' },
  { code: '+359', country: 'BG', name: 'Bulgaria' },
  { code: '+226', country: 'BF', name: 'Burkina Faso' },
  { code: '+257', country: 'BI', name: 'Burundi' },
  { code: '+855', country: 'KH', name: 'Cambodia' },
  { code: '+237', country: 'CM', name: 'Cameroon' },
  { code: '+1', country: 'CA', name: 'Canada' },
  { code: '+238', country: 'CV', name: 'Cape Verde' },
  { code: '+1-345', country: 'KY', name: 'Cayman Islands' },
  { code: '+236', country: 'CF', name: 'Central African Republic' },
  { code: '+235', country: 'TD', name: 'Chad' },
  { code: '+56', country: 'CL', name: 'Chile' },
  { code: '+86', country: 'CN', name: 'China' },
  { code: '+57', country: 'CO', name: 'Colombia' },
  { code: '+269', country: 'KM', name: 'Comoros' },
  { code: '+242', country: 'CG', name: 'Congo' },
  { code: '+243', country: 'CD', name: 'Congo (DRC)' },
  { code: '+682', country: 'CK', name: 'Cook Islands' },
  { code: '+506', country: 'CR', name: 'Costa Rica' },
  { code: '+225', country: 'CI', name: "Côte d'Ivoire" },
  { code: '+385', country: 'HR', name: 'Croatia' },
  { code: '+53', country: 'CU', name: 'Cuba' },
  { code: '+357', country: 'CY', name: 'Cyprus' },
  { code: '+420', country: 'CZ', name: 'Czech Republic' },
  { code: '+45', country: 'DK', name: 'Denmark' },
  { code: '+253', country: 'DJ', name: 'Djibouti' },
  { code: '+1-767', country: 'DM', name: 'Dominica' },
  { code: '+1-809', country: 'DO', name: 'Dominican Republic' },
  { code: '+593', country: 'EC', name: 'Ecuador' },
  { code: '+20', country: 'EG', name: 'Egypt' },
  { code: '+503', country: 'SV', name: 'El Salvador' },
  { code: '+240', country: 'GQ', name: 'Equatorial Guinea' },
  { code: '+291', country: 'ER', name: 'Eritrea' },
  { code: '+372', country: 'EE', name: 'Estonia' },
  { code: '+251', country: 'ET', name: 'Ethiopia' },
  { code: '+500', country: 'FK', name: 'Falkland Islands' },
  { code: '+298', country: 'FO', name: 'Faroe Islands' },
  { code: '+679', country: 'FJ', name: 'Fiji' },
  { code: '+358', country: 'FI', name: 'Finland' },
  { code: '+33', country: 'FR', name: 'France' },
  { code: '+594', country: 'GF', name: 'French Guiana' },
  { code: '+689', country: 'PF', name: 'French Polynesia' },
  { code: '+241', country: 'GA', name: 'Gabon' },
  { code: '+220', country: 'GM', name: 'Gambia' },
  { code: '+995', country: 'GE', name: 'Georgia' },
  { code: '+49', country: 'DE', name: 'Germany' },
  { code: '+233', country: 'GH', name: 'Ghana' },
  { code: '+350', country: 'GI', name: 'Gibraltar' },
  { code: '+30', country: 'GR', name: 'Greece' },
  { code: '+299', country: 'GL', name: 'Greenland' },
  { code: '+1-473', country: 'GD', name: 'Grenada' },
  { code: '+590', country: 'GP', name: 'Guadeloupe' },
  { code: '+1-671', country: 'GU', name: 'Guam' },
  { code: '+502', country: 'GT', name: 'Guatemala' },
  { code: '+224', country: 'GN', name: 'Guinea' },
  { code: '+245', country: 'GW', name: 'Guinea-Bissau' },
  { code: '+592', country: 'GY', name: 'Guyana' },
  { code: '+509', country: 'HT', name: 'Haiti' },
  { code: '+504', country: 'HN', name: 'Honduras' },
  { code: '+852', country: 'HK', name: 'Hong Kong' },
  { code: '+36', country: 'HU', name: 'Hungary' },
  { code: '+354', country: 'IS', name: 'Iceland' },
  { code: '+91', country: 'IN', name: 'India' },
  { code: '+62', country: 'ID', name: 'Indonesia' },
  { code: '+98', country: 'IR', name: 'Iran' },
  { code: '+964', country: 'IQ', name: 'Iraq' },
  { code: '+353', country: 'IE', name: 'Ireland' },
  { code: '+972', country: 'IL', name: 'Israel' },
  { code: '+39', country: 'IT', name: 'Italy' },
  { code: '+1-876', country: 'JM', name: 'Jamaica' },
  { code: '+81', country: 'JP', name: 'Japan' },
  { code: '+962', country: 'JO', name: 'Jordan' },
  { code: '+7', country: 'KZ', name: 'Kazakhstan' },
  { code: '+254', country: 'KE', name: 'Kenya' },
  { code: '+686', country: 'KI', name: 'Kiribati' },
  { code: '+850', country: 'KP', name: 'North Korea' },
  { code: '+82', country: 'KR', name: 'South Korea' },
  { code: '+965', country: 'KW', name: 'Kuwait' },
  { code: '+996', country: 'KG', name: 'Kyrgyzstan' },
  { code: '+856', country: 'LA', name: 'Laos' },
  { code: '+371', country: 'LV', name: 'Latvia' },
  { code: '+961', country: 'LB', name: 'Lebanon' },
  { code: '+266', country: 'LS', name: 'Lesotho' },
  { code: '+231', country: 'LR', name: 'Liberia' },
  { code: '+218', country: 'LY', name: 'Libya' },
  { code: '+423', country: 'LI', name: 'Liechtenstein' },
  { code: '+370', country: 'LT', name: 'Lithuania' },
  { code: '+352', country: 'LU', name: 'Luxembourg' },
  { code: '+853', country: 'MO', name: 'Macao' },
  { code: '+389', country: 'MK', name: 'North Macedonia' },
  { code: '+261', country: 'MG', name: 'Madagascar' },
  { code: '+265', country: 'MW', name: 'Malawi' },
  { code: '+60', country: 'MY', name: 'Malaysia' },
  { code: '+960', country: 'MV', name: 'Maldives' },
  { code: '+223', country: 'ML', name: 'Mali' },
  { code: '+356', country: 'MT', name: 'Malta' },
  { code: '+692', country: 'MH', name: 'Marshall Islands' },
  { code: '+596', country: 'MQ', name: 'Martinique' },
  { code: '+222', country: 'MR', name: 'Mauritania' },
  { code: '+230', country: 'MU', name: 'Mauritius' },
  { code: '+262', country: 'YT', name: 'Mayotte' },
  { code: '+52', country: 'MX', name: 'Mexico' },
  { code: '+691', country: 'FM', name: 'Micronesia' },
  { code: '+373', country: 'MD', name: 'Moldova' },
  { code: '+377', country: 'MC', name: 'Monaco' },
  { code: '+976', country: 'MN', name: 'Mongolia' },
  { code: '+382', country: 'ME', name: 'Montenegro' },
  { code: '+1-664', country: 'MS', name: 'Montserrat' },
  { code: '+212', country: 'MA', name: 'Morocco' },
  { code: '+258', country: 'MZ', name: 'Mozambique' },
  { code: '+95', country: 'MM', name: 'Myanmar' },
  { code: '+264', country: 'NA', name: 'Namibia' },
  { code: '+674', country: 'NR', name: 'Nauru' },
  { code: '+977', country: 'NP', name: 'Nepal' },
  { code: '+31', country: 'NL', name: 'Netherlands' },
  { code: '+687', country: 'NC', name: 'New Caledonia' },
  { code: '+64', country: 'NZ', name: 'New Zealand' },
  { code: '+505', country: 'NI', name: 'Nicaragua' },
  { code: '+227', country: 'NE', name: 'Niger' },
  { code: '+234', country: 'NG', name: 'Nigeria' },
  { code: '+683', country: 'NU', name: 'Niue' },
  { code: '+672', country: 'NF', name: 'Norfolk Island' },
  { code: '+1-670', country: 'MP', name: 'Northern Mariana Islands' },
  { code: '+47', country: 'NO', name: 'Norway' },
  { code: '+968', country: 'OM', name: 'Oman' },
  { code: '+92', country: 'PK', name: 'Pakistan' },
  { code: '+680', country: 'PW', name: 'Palau' },
  { code: '+970', country: 'PS', name: 'Palestine' },
  { code: '+507', country: 'PA', name: 'Panama' },
  { code: '+675', country: 'PG', name: 'Papua New Guinea' },
  { code: '+595', country: 'PY', name: 'Paraguay' },
  { code: '+51', country: 'PE', name: 'Peru' },
  { code: '+63', country: 'PH', name: 'Philippines' },
  { code: '+48', country: 'PL', name: 'Poland' },
  { code: '+351', country: 'PT', name: 'Portugal' },
  { code: '+1-787', country: 'PR', name: 'Puerto Rico' },
  { code: '+974', country: 'QA', name: 'Qatar' },
  { code: '+262', country: 'RE', name: 'Réunion' },
  { code: '+40', country: 'RO', name: 'Romania' },
  { code: '+7', country: 'RU', name: 'Russia' },
  { code: '+250', country: 'RW', name: 'Rwanda' },
  { code: '+590', country: 'BL', name: 'Saint Barthélemy' },
  { code: '+290', country: 'SH', name: 'Saint Helena' },
  { code: '+1-869', country: 'KN', name: 'Saint Kitts and Nevis' },
  { code: '+1-758', country: 'LC', name: 'Saint Lucia' },
  { code: '+590', country: 'MF', name: 'Saint Martin' },
  { code: '+508', country: 'PM', name: 'Saint Pierre and Miquelon' },
  { code: '+1-784', country: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: '+685', country: 'WS', name: 'Samoa' },
  { code: '+378', country: 'SM', name: 'San Marino' },
  { code: '+239', country: 'ST', name: 'São Tomé and Príncipe' },
  { code: '+966', country: 'SA', name: 'Saudi Arabia' },
  { code: '+221', country: 'SN', name: 'Senegal' },
  { code: '+381', country: 'RS', name: 'Serbia' },
  { code: '+248', country: 'SC', name: 'Seychelles' },
  { code: '+232', country: 'SL', name: 'Sierra Leone' },
  { code: '+65', country: 'SG', name: 'Singapore' },
  { code: '+1-721', country: 'SX', name: 'Sint Maarten' },
  { code: '+421', country: 'SK', name: 'Slovakia' },
  { code: '+386', country: 'SI', name: 'Slovenia' },
  { code: '+677', country: 'SB', name: 'Solomon Islands' },
  { code: '+252', country: 'SO', name: 'Somalia' },
  { code: '+27', country: 'ZA', name: 'South Africa' },
  { code: '+211', country: 'SS', name: 'South Sudan' },
  { code: '+34', country: 'ES', name: 'Spain' },
  { code: '+94', country: 'LK', name: 'Sri Lanka' },
  { code: '+249', country: 'SD', name: 'Sudan' },
  { code: '+597', country: 'SR', name: 'Suriname' },
  { code: '+47', country: 'SJ', name: 'Svalbard and Jan Mayen' },
  { code: '+268', country: 'SZ', name: 'Eswatini' },
  { code: '+46', country: 'SE', name: 'Sweden' },
  { code: '+41', country: 'CH', name: 'Switzerland' },
  { code: '+963', country: 'SY', name: 'Syria' },
  { code: '+886', country: 'TW', name: 'Taiwan' },
  { code: '+992', country: 'TJ', name: 'Tajikistan' },
  { code: '+255', country: 'TZ', name: 'Tanzania' },
  { code: '+66', country: 'TH', name: 'Thailand' },
  { code: '+670', country: 'TL', name: 'Timor-Leste' },
  { code: '+228', country: 'TG', name: 'Togo' },
  { code: '+690', country: 'TK', name: 'Tokelau' },
  { code: '+676', country: 'TO', name: 'Tonga' },
  { code: '+1-868', country: 'TT', name: 'Trinidad and Tobago' },
  { code: '+216', country: 'TN', name: 'Tunisia' },
  { code: '+90', country: 'TR', name: 'Turkey' },
  { code: '+993', country: 'TM', name: 'Turkmenistan' },
  { code: '+1-649', country: 'TC', name: 'Turks and Caicos Islands' },
  { code: '+688', country: 'TV', name: 'Tuvalu' },
  { code: '+256', country: 'UG', name: 'Uganda' },
  { code: '+380', country: 'UA', name: 'Ukraine' },
  { code: '+971', country: 'AE', name: 'United Arab Emirates' },
  { code: '+44', country: 'GB', name: 'United Kingdom' },
  { code: '+1', country: 'US', name: 'United States' },
  { code: '+598', country: 'UY', name: 'Uruguay' },
  { code: '+998', country: 'UZ', name: 'Uzbekistan' },
  { code: '+678', country: 'VU', name: 'Vanuatu' },
  { code: '+379', country: 'VA', name: 'Vatican City' },
  { code: '+58', country: 'VE', name: 'Venezuela' },
  { code: '+84', country: 'VN', name: 'Vietnam' },
  { code: '+1-284', country: 'VG', name: 'British Virgin Islands' },
  { code: '+1-340', country: 'VI', name: 'U.S. Virgin Islands' },
  { code: '+681', country: 'WF', name: 'Wallis and Futuna' },
  { code: '+212', country: 'EH', name: 'Western Sahara' },
  { code: '+967', country: 'YE', name: 'Yemen' },
  { code: '+260', country: 'ZM', name: 'Zambia' },
  { code: '+263', country: 'ZW', name: 'Zimbabwe' },
];

function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find((c) => c.code === value);

  const filtered = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) ||
      country.code.includes(search)
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-left flex items-center justify-between hover:border-interactive-primary focus:outline-none focus:ring-2 focus:ring-interactive-primary text-text-primary text-sm"
      >
        <span className="truncate">
          {selectedCountry
            ? `${selectedCountry.name} (${selectedCountry.code})`
            : 'Select country'}
        </span>
        <svg
          className="w-4 h-4 text-text-tertiary flex-shrink-0 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-surface-primary border border-border-secondary rounded-lg shadow-lg max-h-80 overflow-hidden">
          <div className="p-2 border-b border-border-secondary">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full px-3 py-2 border border-border-secondary rounded text-sm focus:outline-none focus:ring-2 focus:ring-interactive-primary bg-surface-primary text-text-primary placeholder:text-text-tertiary"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto max-h-64">
            {filtered.length > 0 ? (
              filtered.map((country) => (
                <button
                  key={country.country}
                  type="button"
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-interactive-primary hover:text-text-main-white focus:bg-interactive-primary focus:text-text-main-white focus:outline-none text-text-primary transition-colors"
                >
                  {country.name} ({country.code})
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-text-tertiary text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+234',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phoneNumber}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+234',
          phoneNumber: '',
          message: '',
          agreeToPolicy: false,
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="heading-bebas text-4xl text-text-main-dark mb-2">
          Get in Touch
        </h2>
        <p className="text-text-secondary text-sm">
          We&apos;d love to hear from you. Please fill out this form.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-success-light text-success'
                : 'bg-error-light text-error'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-text-primary mb-1.5"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="First name"
              required
              className="w-full px-3.5 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-text-primary mb-1.5"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Last name"
              required
              className="w-full px-3.5 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@company.com"
            required
            className="w-full px-3.5 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Phone number
          </label>
          <div className="flex gap-2">
            <div className="w-2/5">
              <CountrySelect
                value={formData.countryCode}
                onChange={(code) =>
                  setFormData({ ...formData, countryCode: code })
                }
              />
            </div>
            <input
              type="tel"
              id="phone"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              placeholder="Phone number"
              required
              className="flex-1 px-3.5 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Your message..."
            required
            rows={4}
            className="w-full px-3.5 py-2.5 bg-surface-primary border border-border-secondary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onChange={(e) =>
              setFormData({ ...formData, agreeToPolicy: e.target.checked })
            }
            required
            className="mt-1 w-4 h-4 text-interactive-primary border-border-secondary rounded focus:ring-interactive-primary"
          />
          <label
            htmlFor="agreeToPolicy"
            className="text-sm text-text-secondary"
          >
            You agree to our friendly{' '}
            <Link
              href={ROUTES.LEGAL_PRIVACY}
              className="text-interactive-primary hover:text-interactive-primary-hover underline"
            >
              privacy policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.agreeToPolicy}
          className="w-full py-3 px-4 bg-interactive-primary text-text-main-white font-medium rounded-lg hover:bg-interactive-primary-hover focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  );
}
