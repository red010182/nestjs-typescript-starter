import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { RolesGuard } from './roles.guard'

export function Auth(...roles: string[]) {
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard, RolesGuard))
}
