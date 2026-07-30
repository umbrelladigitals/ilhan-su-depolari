import type { Access, FieldAccess } from 'payload'

type UserWithRole = {
  id?: string | number
  role?: 'admin' | 'editor' | null
}

export const isAuthenticated: Access = ({ req }) => Boolean(req.user)

export const isAdmin: Access = ({ req }) =>
  (req.user as UserWithRole | null)?.role === 'admin'

export const isAdminField: FieldAccess = ({ req }) =>
  (req.user as UserWithRole | null)?.role === 'admin'

export const publicReadAuthenticatedWrite = {
  read: () => true,
  create: isAuthenticated,
  update: isAuthenticated,
  delete: isAuthenticated,
}

export const authenticatedOnly = {
  read: isAuthenticated,
  create: isAuthenticated,
  update: isAuthenticated,
  delete: isAuthenticated,
}

export const adminOnly = {
  read: isAdmin,
  create: isAdmin,
  update: isAdmin,
  delete: isAdmin,
}

