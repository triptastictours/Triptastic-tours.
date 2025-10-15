Triptastic Tours - Single-page React site (Vite) - Ready to Deploy
---------------------------------------------------------------

How to use:
1. Unzip the project.
2. Install dependencies:
   npm install
3. Start local dev server:
   npm run dev
4. Build for production:
   npm run build
5. Preview production:
   npm run preview

Deploy to Vercel (recommended):
1. Create a Vercel account (vercel.com) and install the Vercel CLI (optional).
2. In Vercel dashboard, click "New Project" and import this repository (you can also drag & drop the project folder or connect Git).
3. Vercel will detect 'vite' and use the build command 'npm run build' and output directory 'dist'.
4. After deploy, go to Project Settings -> Domains and add your domain (www.triptastictours.co.in).
   Vercel will show the DNS records you need to add at GoDaddy (usually a CNAME for 'www' and an A record for the apex domain).
5. Log in to GoDaddy -> My Products -> DNS for your domain -> Add the records Vercel asked for.
   - If Vercel recommends changing nameservers to Vercel's, follow their instructions.
6. Wait for DNS propagation (can take a few minutes up to 48 hours).

Notes and Helpful Links:
- Vercel docs: Adding & configuring a custom domain. See: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- Vercel DNS management: https://vercel.com/docs/domains/managing-dns-records
- GoDaddy CNAME instructions: https://www.godaddy.com/help/add-a-cname-record-19236

Connecting GoDaddy domain directly (summary):
1. Add your domain in Vercel project -> it will give you DNS records to add.
2. In GoDaddy DNS settings, add those records (CNAME for www pointing to cname.vercel-dns.com OR the CNAME target shown).
3. For apex domain (triptastictours.co.in) Vercel may ask to set A records or delegate nameservers. Follow the instructions provided by Vercel in your dashboard.

If you prefer Netlify, the steps are similar (add site, then add custom domain in Netlify dashboard and update GoDaddy DNS).

If you want, I can:
- Build and deploy to Vercel for you if you provide Vercel/Git access, or
- Walk you step-by-step while you perform the deployment.

