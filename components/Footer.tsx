import {siteInfo} from '@/data/site';
import {FileText, GraduationCap, Linkedin, Mail, MapPin} from 'lucide-react';

const socialConfig = {
  scholar: {
    icon: GraduationCap,
    label: 'Google Scholar',
  },
  ssrn: {
    icon: FileText,
    label: 'SSRN',
  },
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
  },
} as const;

const currentYear = new Date().getFullYear(); // Year at build time

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 mt-auto">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-zinc-600">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-primary focus-ring rounded"
                >
                  {siteInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <address className="not-italic">{siteInfo.address}</address>
              </div>
            </div>
          </div>

          {/* Academic Profiles Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Academic Profiles
            </h3>
            <ul className="space-y-3 text-sm">
              {siteInfo.socials.map((social) => {
                const config = socialConfig[social.type];
                const Icon = config.icon;
                const label = config.label;
                return (
                  <li key={social.type}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-600 hover:text-primary focus-ring rounded"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Institutional Affiliations Column */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">
              Institutional Affiliations
            </h3>
            <ul className="space-y-3 text-sm">
              {siteInfo.affiliations.map((affiliation) => (
                <li key={affiliation.label}>
                  <a
                    href={affiliation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-primary focus-ring rounded"
                  >
                    {affiliation.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 text-center">
            ©
            {' '}
            {currentYear}
            {' '}
            {siteInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
