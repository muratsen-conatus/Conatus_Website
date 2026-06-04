-- Supabase SQL Editor veya CLI ile bir kez çalıştırın.

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  locale text not null check (locale in ('tr', 'en')),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  company text not null,
  position text not null,
  subject text not null,
  message text not null,
  kvkk_consent boolean not null default false,
  marketing_consent boolean not null default false
);

create index contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index contact_submissions_email_idx
  on public.contact_submissions (email);

alter table public.contact_submissions enable row level security;

-- Public/anon erişim yok. Yazma/okuma yalnızca service_role (Next.js API) üzerinden.
