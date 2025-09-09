import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserManager() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Manage users, roles, and permissions here.</p>
      </CardContent>
    </Card>
  );
}
