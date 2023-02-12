import { fetchCategoryBySlug, PageProps } from "@/utils/getCategories"
import { Boundary } from "ui"
import { Counter } from "@/components/ContextClickCounter"
import { TabWrapper } from "@/components/TabWrapper"

export default async function Layout({ children, params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug)
  if (!category) return null

  const tabs: { text: string; slug?: string }[] = [
    {
      text: "All",
    },
    ...category.items.map((x) => ({
      text: x.name,
      slug: x.slug,
    })),
  ]

  const path = `/context/${category.slug}`

  return (
    <Boundary
      labels={["Layout [Server Component]"]}
      color="orange"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <TabWrapper key={path + tab.slug} item={tab} path={path} />
          ))}
        </div>
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  )
}
