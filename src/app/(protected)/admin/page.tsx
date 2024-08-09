'use client'

import { admin } from "@/actions/admin"
import { RoleGate } from "@/components/auth"
import { FormSuccess } from "@/components/common"
import { Button, Card, CardContent, CardHeader } from "@/components/ui"
import { toast } from "sonner"

export default function AdminPage() {
  function onServerActionClick() {
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error)
        }

        if (data.success) {
          toast.success(data.success)
        }
      })
  }

  function onApiRouteClick() {
    fetch('/api/admin')
      .then((response) => {
        if (response.ok) {
          toast.success('Allowed API Route!')
        } else {
          toast.error('Forbidden API Route!')
        }
      })
  }
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate
          allowedRole={"ADMIN"}
        >
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between border rounded-lg p-3 shadow-md ">
          <p className="text-sm font-medium">
            Admin-only API Route
          </p>
          <Button onClick={onApiRouteClick}>
            Click to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between border rounded-lg p-3 shadow-md ">
          <p className="text-sm font-medium">
            Admin-only Server Action
          </p>
          <Button onClick={onServerActionClick}>
            Click to test
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}