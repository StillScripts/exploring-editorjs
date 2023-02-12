import { Boundary } from "ui"
import React from "react"
import { fetchCategories } from "@/utils/getCategories"
import { CounterProvider } from "@/components/CounterContext"
import ContextClickCounter from "@/components/ContextClickCounter"
import { TabWrapper } from "@/components/TabWrapper"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await fetchCategories()

  const tabs: { text: string; slug?: string }[] = [
    {
      text: "Home",
    },
    ...categories.map((x) => ({
      text: x.name,
      slug: x.slug,
    })),
  ]

  const path = "/context"

  return (
    <div className="p-12">
      <Boundary
        labels={["Server Component Boundary"]}
        color="orange"
        size="default"
        animateRerendering={false}
      >
        <Boundary
          labels={["Counter Context Provider [Client Component]"]}
          color="blue"
          size="default"
          animateRerendering={false}
        >
          <CounterProvider>
            <Boundary
              labels={["Server Component Boundary"]}
              color="orange"
              size="default"
              animateRerendering={false}
            >
              <div className="space-y-9">
                <div className="flex justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    {tabs.map((tab) => (
                      <TabWrapper
                        key={path + tab.slug}
                        item={tab}
                        path={path}
                      />
                    ))}
                  </div>
                </div>

                <ContextClickCounter />
                <div>{children}</div>
              </div>
            </Boundary>
          </CounterProvider>
        </Boundary>
      </Boundary>
    </div>
  )
}
