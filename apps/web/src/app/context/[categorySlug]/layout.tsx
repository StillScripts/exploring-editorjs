import { fetchCategoryBySlug, PageProps } from "../../../utils/getCategories"
import { Boundary } from "ui"
import { TabGroup } from "mui"
import { Counter } from "../ContextClickCounter"

export default async function Layout({ children, params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug)
  if (!category) return null

  return (
    <Boundary labels={["Layout [Server Component]"]} animateRerendering={false}>
      <div className="space-y-9">
        <TabGroup
          path={`/context/${category.slug}`}
          items={[
            {
              text: "All",
            },
            ...category.items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  )
}
