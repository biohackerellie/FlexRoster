"use client";

import * as React from "react";

import { Button } from "@local/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { Input } from "@local/ui/input";
import { Label } from "@local/ui/label";

import { createClassroom } from "./logic/actions";

interface EditClassroomFormProps {
  userId: string;
}

export default function EditClassroomForm({ userId }: EditClassroomFormProps) {
  const createWithArgs = createClassroom.bind(null, userId);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">
          No classroom found in FlexRoster, would you like to create one?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createWithArgs}>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Teacher Name</Label>
                <Input
                  id="teacherName"
                  name="teacherName"
                  placeholder="First Last"
                  required
                />
              </div>
              <Label htmlFor="room">Room Number</Label>
              <Input
                id="roomNumber"
                name="roomNumber"
                placeholder="Example: '129' or 'Library'"
                required
              />
              <Button type="submit" className="w-full">
                Create Classroom
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
