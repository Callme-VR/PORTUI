import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const CENTERED_COMPONENTS = [
  "alert",
  "ai-input",
  "button",
  "card",
  "faq",
  "input",
  "list",
  "pricing",
  "profile",
  "text",
  "checkout",
  "particle-button",
  "currency-transfer",
  "hand-written-title",
  "tweet-card",
  "action-search-bar",
  "blocks/ai-card-generation",
  "vercel-v0-chat",
];

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (!slug.length) return notFound();

  const componentName = slug.join("/");

  try {
    const Component = dynamic(
      () =>
        import(`@/components/portui/${componentName}`).catch(() => {
          notFound();
        }),
      { ssr: true }
    );

    const shouldCenter = CENTERED_COMPONENTS.some((component) => {
      return componentName.startsWith(component);
    });

    return shouldCenter ? (
      <div className="min-h-screen flex items-center justify-center">
        <Component />
      </div>
    ) : (
      <Component />
    );
  } catch (error) {
    console.log("Error in loading Components:", error);
    return notFound();
  }
}
