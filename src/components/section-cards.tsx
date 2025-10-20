import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5 p-8">
      <Card className="@container/card bg-[#171717]">
        <CardHeader>
          <CardDescription>Envios em Transporte</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            254
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Taxa de volumes em transporte <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Dados atualizados em tempo real
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card bg-[#171717]">
        <CardHeader>
          <CardDescription>Entregas Realizadas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            328
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +90%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Taxa de entregas realizadas no prazo <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Dados atualizados em tempo real
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card bg-[#171717]">
        <CardHeader>
          <CardDescription>Entregas Atrasadas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            125
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Taxa de entregas atrasadas no mês <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Dados atualizados em tempo real</div>
        </CardFooter>
      </Card>
      <Card className="@container/card bg-[#171717]">
        <CardHeader>
          <CardDescription>Economia de Frete</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            18.7%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +18.7%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Taxa de economia de frete <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Dados atualizados em tempo real</div>
        </CardFooter>
      </Card>
    </div>
  )
}
