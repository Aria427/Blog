import { genPageMetadata } from 'app/seo';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import SocialIcon from '@/components/social-icons';

export const metadata = genPageMetadata({
  title: 'About',
  description: 'About Sara Ann Abdilla and Nomad Gourmet Chronicles',
});

export default function About() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
        <div className="flex flex-col items-center pt-8">
          <Image
            src="/static/images/avatar.png"
            alt="Sara Ann Abdilla"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
            Sara Ann Abdilla
          </h3>
          <div className="text-gray-500 dark:text-gray-400">Traveller & Home Cook</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8 text-justify xl:col-span-2">
          <h2>Welcome to Nomad Gourmet Chronicles</h2>
          <p>
            Hello! I&apos;m Sara, a Maltese travel enthusiast and home cook with a passion for
            exploring the world through its flavours. What started as a personal collection of
            travel memories and tested recipes has grown into this blog - a space where I share my
            culinary adventures and the dishes that have become staples in my kitchen.
          </p>

          <h2>My Culinary Journey</h2>
          <p>
            My love for cooking began in my family&apos;s kitchen in Malta, where I learned that
            food is more than sustenance - it&apos;s culture, memory, and connection. Over the
            years, I&apos;ve adapted my cooking to accommodate dietary needs while refusing to
            compromise on flavour. Every recipe here has been personally developed and tested, often
            multiple times, until it earned its place on this blog.
          </p>
          <p>
            My pescatarian diet stems from a deep love of animals - a choice that feels right for
            me. Combined with my lactose intolerance (which is thankfully fading over time) and my
            boyfriend&apos;s gluten intolerance, cooking at home became an exercise in creativity.
            What I discovered is that these limitations can be liberating - they forced me to
            explore ingredients and techniques I might never have tried otherwise. Now I want to
            share what I&apos;ve learned with others who face similar challenges or simply want to
            eat more mindfully.
          </p>

          <h2>What You&apos;ll Find Here</h2>
          <p>
            <strong>Recipes:</strong> All my recipes are pescatarian-friendly (no meat, fish is
            welcome), and most are naturally gluten-free and lactose-free. I focus on wholesome
            ingredients that nourish without compromising on taste. Every recipe includes full
            nutritional information and clear, tested instructions.
          </p>
          <p>
            <strong>Travel Stories:</strong> From the bustling streets of Tokyo to hidden gems
            across Europe, I share detailed accounts of my travels with a focus on food culture and
            local experiences. These aren&apos;t just itineraries - they&apos;re stories of the
            people, places, and dishes that made each journey memorable.
          </p>

          <h2>My Philosophy</h2>
          <p>
            I believe that eating well shouldn&apos;t mean eating bland, and that dietary
            restrictions don&apos;t have to limit your enjoyment of food. Whether you&apos;re
            gluten-free, lactose-free, or simply looking for healthier alternatives, I hope my
            recipes prove that delicious food is always possible.
          </p>
          <p>
            I also believe in honest, tested content. Every recipe you see here has been made in my
            own kitchen - often multiple times - before being shared. I won&apos;t recommend
            something I haven&apos;t tried myself.
          </p>

          <h2>Let&apos;s Connect</h2>
          <p>
            I love hearing from readers! Whether you&apos;ve tried one of my recipes, have a
            question about substitutions, or just want to chat about travel and food, feel free to
            reach out through my <a href="/contact">contact page</a> or connect with me on social
            media.
          </p>
          <p>
            Thank you for visiting Nomad Gourmet Chronicles. I hope you find inspiration here for
            your next meal or your next adventure.
          </p>
          <p>
            <em>Happy cooking and safe travels!</em>
          </p>
          <p>
            <strong>- Sara</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
