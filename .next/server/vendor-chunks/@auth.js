"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/prisma-adapter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@auth/prisma-adapter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaAdapter: () => (/* binding */ PrismaAdapter)\n/* harmony export */ });\n/**\n * ## Setup\n *\n * Add this adapter to your `pages/api/auth/[...nextauth].js` next-auth configuration object:\n *\n * ```js title=\"pages/api/auth/[...nextauth].js\"\n * import NextAuth from \"next-auth\"\n * import GoogleProvider from \"next-auth/providers/google\"\n * import { PrismaAdapter } from \"@auth/prisma-adapter\"\n * import { PrismaClient } from \"@prisma/client\"\n *\n * const prisma = new PrismaClient()\n *\n * export default NextAuth({\n *   adapter: PrismaAdapter(prisma),\n *   providers: [\n *     GoogleProvider({\n *       clientId: process.env.GOOGLE_CLIENT_ID,\n *       clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n *     }),\n *   ],\n * })\n * ```\n *\n * ### Create the Prisma schema from scratch\n *\n * You need to use at least Prisma 2.26.0. Create a schema file in `prisma/schema.prisma` similar to this one:\n *\n * > This schema is adapted for use in Prisma and based upon our main [schema](https://authjs.dev/reference/core/adapters#models)\n *\n * ```json title=\"schema.prisma\"\n * datasource db {\n *   provider = \"postgresql\"\n *   url      = env(\"DATABASE_URL\")\n *   shadowDatabaseUrl = env(\"SHADOW_DATABASE_URL\") // Only needed when using a cloud provider that doesn't support the creation of new databases, like Heroku. Learn more: https://pris.ly/d/migrate-shadow\n * }\n *\n * generator client {\n *   provider        = \"prisma-client-js\"\n *   previewFeatures = [\"referentialActions\"] // You won't need this in Prisma 3.X or higher.\n * }\n *\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String\n *   type               String\n *   provider           String\n *   providerAccountId  String\n *   refresh_token      String?  @db.Text\n *   access_token       String?  @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String?  @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique\n *   userId       String\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime?\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n * }\n * ```\n *\n * :::note\n * When using the MySQL connector for Prisma, the [Prisma `String` type](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#string) gets mapped to `varchar(191)` which may not be long enough to store fields such as `id_token` in the `Account` model. This can be avoided by explicitly using the `Text` type with `@db.Text`.\n * :::\n *\n *\n * ### Create the Prisma schema with `prisma migrate`\n *\n * This will create an SQL migration file and execute it:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.\n *\n * To learn more about [Prisma Migrate](https://www.prisma.io/migrate), check out the [Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate).\n *\n * ### Generating the Prisma Client\n *\n * Once you have saved your schema, use the Prisma CLI to generate the Prisma Client:\n *\n * ```\n * npx prisma generate\n * ```\n *\n * To configure your database to use the new schema (i.e. create tables and columns) use the `prisma migrate` command:\n *\n * ```\n * npx prisma migrate dev\n * ```\n *\n * ### MongoDB support\n *\n * Prisma supports MongoDB, and so does Auth.js. Following the instructions of the [Prisma documentation](https://www.prisma.io/docs/concepts/database-connectors/mongodb) on the MongoDB connector, things you have to change are:\n *\n * 1. Make sure that the id fields are mapped correctly\n *\n * ```prisma\n * id  String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n * ```\n *\n * 2. The Native database type attribute to `@db.String` from `@db.Text` and userId to `@db.ObjectId`.\n *\n * ```prisma\n * user_id            String   @db.ObjectId\n * refresh_token      String?  @db.String\n * access_token       String?  @db.String\n * id_token           String?  @db.String\n * ```\n *\n * Everything else should be the same.\n *\n * ### Naming Conventions\n *\n * If mixed snake_case and camelCase column names is an issue for you and/or your underlying database system, we recommend using Prisma's `@map()`([see the documentation here](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database)) feature to change the field names. This won't affect Auth.js, but will allow you to customize the column names to whichever naming convention you wish.\n *\n * For example, moving to `snake_case` and plural table names.\n *\n * ```json title=\"schema.prisma\"\n * model Account {\n *   id                 String  @id @default(cuid())\n *   userId             String  @map(\"user_id\")\n *   type               String\n *   provider           String\n *   providerAccountId  String  @map(\"provider_account_id\")\n *   refresh_token      String? @db.Text\n *   access_token       String? @db.Text\n *   expires_at         Int?\n *   token_type         String?\n *   scope              String?\n *   id_token           String? @db.Text\n *   session_state      String?\n *\n *   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@unique([provider, providerAccountId])\n *   @@map(\"accounts\")\n * }\n *\n * model Session {\n *   id           String   @id @default(cuid())\n *   sessionToken String   @unique @map(\"session_token\")\n *   userId       String   @map(\"user_id\")\n *   expires      DateTime\n *   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n *\n *   @@map(\"sessions\")\n * }\n *\n * model User {\n *   id            String    @id @default(cuid())\n *   name          String?\n *   email         String?   @unique\n *   emailVerified DateTime? @map(\"email_verified\")\n *   image         String?\n *   accounts      Account[]\n *   sessions      Session[]\n *\n *   @@map(\"users\")\n * }\n *\n * model VerificationToken {\n *   identifier String\n *   token      String   @unique\n *   expires    DateTime\n *\n *   @@unique([identifier, token])\n *   @@map(\"verificationtokens\")\n * }\n * ```\n *\n **/ function PrismaAdapter(p) {\n    return {\n        createUser: (data)=>p.user.create({\n                data\n            }),\n        getUser: (id)=>p.user.findUnique({\n                where: {\n                    id\n                }\n            }),\n        getUserByEmail: (email)=>p.user.findUnique({\n                where: {\n                    email\n                }\n            }),\n        async getUserByAccount (provider_providerAccountId) {\n            const account = await p.account.findUnique({\n                where: {\n                    provider_providerAccountId\n                },\n                select: {\n                    user: true\n                }\n            });\n            return account?.user ?? null;\n        },\n        updateUser: ({ id, ...data })=>p.user.update({\n                where: {\n                    id\n                },\n                data\n            }),\n        deleteUser: (id)=>p.user.delete({\n                where: {\n                    id\n                }\n            }),\n        linkAccount: (data)=>p.account.create({\n                data\n            }),\n        unlinkAccount: (provider_providerAccountId)=>p.account.delete({\n                where: {\n                    provider_providerAccountId\n                }\n            }),\n        async getSessionAndUser (sessionToken) {\n            const userAndSession = await p.session.findUnique({\n                where: {\n                    sessionToken\n                },\n                include: {\n                    user: true\n                }\n            });\n            if (!userAndSession) return null;\n            const { user, ...session } = userAndSession;\n            return {\n                user,\n                session\n            };\n        },\n        createSession: (data)=>p.session.create({\n                data\n            }),\n        updateSession: (data)=>p.session.update({\n                where: {\n                    sessionToken: data.sessionToken\n                },\n                data\n            }),\n        deleteSession: (sessionToken)=>p.session.delete({\n                where: {\n                    sessionToken\n                }\n            }),\n        async createVerificationToken (data) {\n            const verificationToken = await p.verificationToken.create({\n                data\n            });\n            // @ts-expect-errors // MongoDB needs an ID, but we don't\n            if (verificationToken.id) delete verificationToken.id;\n            return verificationToken;\n        },\n        async useVerificationToken (identifier_token) {\n            try {\n                const verificationToken = await p.verificationToken.delete({\n                    where: {\n                        identifier_token\n                    }\n                });\n                // @ts-expect-errors // MongoDB needs an ID, but we don't\n                if (verificationToken.id) delete verificationToken.id;\n                return verificationToken;\n            } catch (error) {\n                // If token already used/deleted, just return null\n                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025\n                if (error.code === \"P2025\") return null;\n                throw error;\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvcHJpc21hLWFkYXB0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdU1FLEdBQ0ssU0FBU0EsY0FBY0MsQ0FBQztJQUMzQixPQUFPO1FBQ0hDLFlBQVksQ0FBQ0MsT0FBU0YsRUFBRUcsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQUVGO1lBQUs7UUFDM0NHLFNBQVMsQ0FBQ0MsS0FBT04sRUFBRUcsSUFBSSxDQUFDSSxVQUFVLENBQUM7Z0JBQUVDLE9BQU87b0JBQUVGO2dCQUFHO1lBQUU7UUFDbkRHLGdCQUFnQixDQUFDQyxRQUFVVixFQUFFRyxJQUFJLENBQUNJLFVBQVUsQ0FBQztnQkFBRUMsT0FBTztvQkFBRUU7Z0JBQU07WUFBRTtRQUNoRSxNQUFNQyxrQkFBaUJDLDBCQUEwQjtZQUM3QyxNQUFNQyxVQUFVLE1BQU1iLEVBQUVhLE9BQU8sQ0FBQ04sVUFBVSxDQUFDO2dCQUN2Q0MsT0FBTztvQkFBRUk7Z0JBQTJCO2dCQUNwQ0UsUUFBUTtvQkFBRVgsTUFBTTtnQkFBSztZQUN6QjtZQUNBLE9BQU9VLFNBQVNWLFFBQVE7UUFDNUI7UUFDQVksWUFBWSxDQUFDLEVBQUVULEVBQUUsRUFBRSxHQUFHSixNQUFNLEdBQUtGLEVBQUVHLElBQUksQ0FBQ2EsTUFBTSxDQUFDO2dCQUFFUixPQUFPO29CQUFFRjtnQkFBRztnQkFBR0o7WUFBSztRQUNyRWUsWUFBWSxDQUFDWCxLQUFPTixFQUFFRyxJQUFJLENBQUNlLE1BQU0sQ0FBQztnQkFBRVYsT0FBTztvQkFBRUY7Z0JBQUc7WUFBRTtRQUNsRGEsYUFBYSxDQUFDakIsT0FBU0YsRUFBRWEsT0FBTyxDQUFDVCxNQUFNLENBQUM7Z0JBQUVGO1lBQUs7UUFDL0NrQixlQUFlLENBQUNSLDZCQUErQlosRUFBRWEsT0FBTyxDQUFDSyxNQUFNLENBQUM7Z0JBQzVEVixPQUFPO29CQUFFSTtnQkFBMkI7WUFDeEM7UUFDQSxNQUFNUyxtQkFBa0JDLFlBQVk7WUFDaEMsTUFBTUMsaUJBQWlCLE1BQU12QixFQUFFd0IsT0FBTyxDQUFDakIsVUFBVSxDQUFDO2dCQUM5Q0MsT0FBTztvQkFBRWM7Z0JBQWE7Z0JBQ3RCRyxTQUFTO29CQUFFdEIsTUFBTTtnQkFBSztZQUMxQjtZQUNBLElBQUksQ0FBQ29CLGdCQUNELE9BQU87WUFDWCxNQUFNLEVBQUVwQixJQUFJLEVBQUUsR0FBR3FCLFNBQVMsR0FBR0Q7WUFDN0IsT0FBTztnQkFBRXBCO2dCQUFNcUI7WUFBUTtRQUMzQjtRQUNBRSxlQUFlLENBQUN4QixPQUFTRixFQUFFd0IsT0FBTyxDQUFDcEIsTUFBTSxDQUFDO2dCQUFFRjtZQUFLO1FBQ2pEeUIsZUFBZSxDQUFDekIsT0FBU0YsRUFBRXdCLE9BQU8sQ0FBQ1IsTUFBTSxDQUFDO2dCQUFFUixPQUFPO29CQUFFYyxjQUFjcEIsS0FBS29CLFlBQVk7Z0JBQUM7Z0JBQUdwQjtZQUFLO1FBQzdGMEIsZUFBZSxDQUFDTixlQUFpQnRCLEVBQUV3QixPQUFPLENBQUNOLE1BQU0sQ0FBQztnQkFBRVYsT0FBTztvQkFBRWM7Z0JBQWE7WUFBRTtRQUM1RSxNQUFNTyx5QkFBd0IzQixJQUFJO1lBQzlCLE1BQU00QixvQkFBb0IsTUFBTTlCLEVBQUU4QixpQkFBaUIsQ0FBQzFCLE1BQU0sQ0FBQztnQkFBRUY7WUFBSztZQUNsRSx5REFBeUQ7WUFDekQsSUFBSTRCLGtCQUFrQnhCLEVBQUUsRUFDcEIsT0FBT3dCLGtCQUFrQnhCLEVBQUU7WUFDL0IsT0FBT3dCO1FBQ1g7UUFDQSxNQUFNQyxzQkFBcUJDLGdCQUFnQjtZQUN2QyxJQUFJO2dCQUNBLE1BQU1GLG9CQUFvQixNQUFNOUIsRUFBRThCLGlCQUFpQixDQUFDWixNQUFNLENBQUM7b0JBQ3ZEVixPQUFPO3dCQUFFd0I7b0JBQWlCO2dCQUM5QjtnQkFDQSx5REFBeUQ7Z0JBQ3pELElBQUlGLGtCQUFrQnhCLEVBQUUsRUFDcEIsT0FBT3dCLGtCQUFrQnhCLEVBQUU7Z0JBQy9CLE9BQU93QjtZQUNYLEVBQ0EsT0FBT0csT0FBTztnQkFDVixrREFBa0Q7Z0JBQ2xELDJFQUEyRTtnQkFDM0UsSUFBSUEsTUFBTUMsSUFBSSxLQUFLLFNBQ2YsT0FBTztnQkFDWCxNQUFNRDtZQUNWO1FBQ0o7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vbm9kZV9tb2R1bGVzL0BhdXRoL3ByaXNtYS1hZGFwdGVyL2luZGV4LmpzPzU4MTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAjIyBTZXR1cFxuICpcbiAqIEFkZCB0aGlzIGFkYXB0ZXIgdG8geW91ciBgcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc2AgbmV4dC1hdXRoIGNvbmZpZ3VyYXRpb24gb2JqZWN0OlxuICpcbiAqIGBgYGpzIHRpdGxlPVwicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiXG4gKiBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4gKiBpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbiAqIGltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuICogaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbiAqXG4gKiBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gKiAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICogICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gKiAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICogICAgIH0pLFxuICogICBdLFxuICogfSlcbiAqIGBgYFxuICpcbiAqICMjIyBDcmVhdGUgdGhlIFByaXNtYSBzY2hlbWEgZnJvbSBzY3JhdGNoXG4gKlxuICogWW91IG5lZWQgdG8gdXNlIGF0IGxlYXN0IFByaXNtYSAyLjI2LjAuIENyZWF0ZSBhIHNjaGVtYSBmaWxlIGluIGBwcmlzbWEvc2NoZW1hLnByaXNtYWAgc2ltaWxhciB0byB0aGlzIG9uZTpcbiAqXG4gKiA+IFRoaXMgc2NoZW1hIGlzIGFkYXB0ZWQgZm9yIHVzZSBpbiBQcmlzbWEgYW5kIGJhc2VkIHVwb24gb3VyIG1haW4gW3NjaGVtYV0oaHR0cHM6Ly9hdXRoanMuZGV2L3JlZmVyZW5jZS9jb3JlL2FkYXB0ZXJzI21vZGVscylcbiAqXG4gKiBgYGBqc29uIHRpdGxlPVwic2NoZW1hLnByaXNtYVwiXG4gKiBkYXRhc291cmNlIGRiIHtcbiAqICAgcHJvdmlkZXIgPSBcInBvc3RncmVzcWxcIlxuICogICB1cmwgICAgICA9IGVudihcIkRBVEFCQVNFX1VSTFwiKVxuICogICBzaGFkb3dEYXRhYmFzZVVybCA9IGVudihcIlNIQURPV19EQVRBQkFTRV9VUkxcIikgLy8gT25seSBuZWVkZWQgd2hlbiB1c2luZyBhIGNsb3VkIHByb3ZpZGVyIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoZSBjcmVhdGlvbiBvZiBuZXcgZGF0YWJhc2VzLCBsaWtlIEhlcm9rdS4gTGVhcm4gbW9yZTogaHR0cHM6Ly9wcmlzLmx5L2QvbWlncmF0ZS1zaGFkb3dcbiAqIH1cbiAqXG4gKiBnZW5lcmF0b3IgY2xpZW50IHtcbiAqICAgcHJvdmlkZXIgICAgICAgID0gXCJwcmlzbWEtY2xpZW50LWpzXCJcbiAqICAgcHJldmlld0ZlYXR1cmVzID0gW1wicmVmZXJlbnRpYWxBY3Rpb25zXCJdIC8vIFlvdSB3b24ndCBuZWVkIHRoaXMgaW4gUHJpc21hIDMuWCBvciBoaWdoZXIuXG4gKiB9XG4gKlxuICogbW9kZWwgQWNjb3VudCB7XG4gKiAgIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHVzZXJJZCAgICAgICAgICAgICBTdHJpbmdcbiAqICAgdHlwZSAgICAgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlciAgICAgICAgICAgU3RyaW5nXG4gKiAgIHByb3ZpZGVyQWNjb3VudElkICBTdHJpbmdcbiAqICAgcmVmcmVzaF90b2tlbiAgICAgIFN0cmluZz8gIEBkYi5UZXh0XG4gKiAgIGFjY2Vzc190b2tlbiAgICAgICBTdHJpbmc/ICBAZGIuVGV4dFxuICogICBleHBpcmVzX2F0ICAgICAgICAgSW50P1xuICogICB0b2tlbl90eXBlICAgICAgICAgU3RyaW5nP1xuICogICBzY29wZSAgICAgICAgICAgICAgU3RyaW5nP1xuICogICBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyAgQGRiLlRleHRcbiAqICAgc2Vzc2lvbl9zdGF0ZSAgICAgIFN0cmluZz9cbiAqXG4gKiAgIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQHVuaXF1ZShbcHJvdmlkZXIsIHByb3ZpZGVyQWNjb3VudElkXSlcbiAqIH1cbiAqXG4gKiBtb2RlbCBTZXNzaW9uIHtcbiAqICAgaWQgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHNlc3Npb25Ub2tlbiBTdHJpbmcgICBAdW5pcXVlXG4gKiAgIHVzZXJJZCAgICAgICBTdHJpbmdcbiAqICAgZXhwaXJlcyAgICAgIERhdGVUaW1lXG4gKiAgIHVzZXIgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKiB9XG4gKlxuICogbW9kZWwgVXNlciB7XG4gKiAgIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIG5hbWUgICAgICAgICAgU3RyaW5nP1xuICogICBlbWFpbCAgICAgICAgIFN0cmluZz8gICBAdW5pcXVlXG4gKiAgIGVtYWlsVmVyaWZpZWQgRGF0ZVRpbWU/XG4gKiAgIGltYWdlICAgICAgICAgU3RyaW5nP1xuICogICBhY2NvdW50cyAgICAgIEFjY291bnRbXVxuICogICBzZXNzaW9ucyAgICAgIFNlc3Npb25bXVxuICogfVxuICpcbiAqIG1vZGVsIFZlcmlmaWNhdGlvblRva2VuIHtcbiAqICAgaWRlbnRpZmllciBTdHJpbmdcbiAqICAgdG9rZW4gICAgICBTdHJpbmcgICBAdW5pcXVlXG4gKiAgIGV4cGlyZXMgICAgRGF0ZVRpbWVcbiAqXG4gKiAgIEBAdW5pcXVlKFtpZGVudGlmaWVyLCB0b2tlbl0pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiA6Ojpub3RlXG4gKiBXaGVuIHVzaW5nIHRoZSBNeVNRTCBjb25uZWN0b3IgZm9yIFByaXNtYSwgdGhlIFtQcmlzbWEgYFN0cmluZ2AgdHlwZV0oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvcmVmZXJlbmNlL2FwaS1yZWZlcmVuY2UvcHJpc21hLXNjaGVtYS1yZWZlcmVuY2Ujc3RyaW5nKSBnZXRzIG1hcHBlZCB0byBgdmFyY2hhcigxOTEpYCB3aGljaCBtYXkgbm90IGJlIGxvbmcgZW5vdWdoIHRvIHN0b3JlIGZpZWxkcyBzdWNoIGFzIGBpZF90b2tlbmAgaW4gdGhlIGBBY2NvdW50YCBtb2RlbC4gVGhpcyBjYW4gYmUgYXZvaWRlZCBieSBleHBsaWNpdGx5IHVzaW5nIHRoZSBgVGV4dGAgdHlwZSB3aXRoIGBAZGIuVGV4dGAuXG4gKiA6OjpcbiAqXG4gKlxuICogIyMjIENyZWF0ZSB0aGUgUHJpc21hIHNjaGVtYSB3aXRoIGBwcmlzbWEgbWlncmF0ZWBcbiAqXG4gKiBUaGlzIHdpbGwgY3JlYXRlIGFuIFNRTCBtaWdyYXRpb24gZmlsZSBhbmQgZXhlY3V0ZSBpdDpcbiAqXG4gKiBgYGBcbiAqIG5weCBwcmlzbWEgbWlncmF0ZSBkZXZcbiAqIGBgYFxuICpcbiAqIE5vdGUgdGhhdCB5b3Ugd2lsbCBuZWVkIHRvIHNwZWNpZnkgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIHN0cmluZyBpbiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYERBVEFCQVNFX1VSTGAuIFlvdSBjYW4gZG8gdGhpcyBieSBzZXR0aW5nIGl0IGluIGEgYC5lbnZgIGZpbGUgYXQgdGhlIHJvb3Qgb2YgeW91ciBwcm9qZWN0LlxuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgW1ByaXNtYSBNaWdyYXRlXShodHRwczovL3d3dy5wcmlzbWEuaW8vbWlncmF0ZSksIGNoZWNrIG91dCB0aGUgW01pZ3JhdGUgZG9jc10oaHR0cHM6Ly93d3cucHJpc21hLmlvL2RvY3MvY29uY2VwdHMvY29tcG9uZW50cy9wcmlzbWEtbWlncmF0ZSkuXG4gKlxuICogIyMjIEdlbmVyYXRpbmcgdGhlIFByaXNtYSBDbGllbnRcbiAqXG4gKiBPbmNlIHlvdSBoYXZlIHNhdmVkIHlvdXIgc2NoZW1hLCB1c2UgdGhlIFByaXNtYSBDTEkgdG8gZ2VuZXJhdGUgdGhlIFByaXNtYSBDbGllbnQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIGdlbmVyYXRlXG4gKiBgYGBcbiAqXG4gKiBUbyBjb25maWd1cmUgeW91ciBkYXRhYmFzZSB0byB1c2UgdGhlIG5ldyBzY2hlbWEgKGkuZS4gY3JlYXRlIHRhYmxlcyBhbmQgY29sdW1ucykgdXNlIHRoZSBgcHJpc21hIG1pZ3JhdGVgIGNvbW1hbmQ6XG4gKlxuICogYGBgXG4gKiBucHggcHJpc21hIG1pZ3JhdGUgZGV2XG4gKiBgYGBcbiAqXG4gKiAjIyMgTW9uZ29EQiBzdXBwb3J0XG4gKlxuICogUHJpc21hIHN1cHBvcnRzIE1vbmdvREIsIGFuZCBzbyBkb2VzIEF1dGguanMuIEZvbGxvd2luZyB0aGUgaW5zdHJ1Y3Rpb25zIG9mIHRoZSBbUHJpc21hIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2RhdGFiYXNlLWNvbm5lY3RvcnMvbW9uZ29kYikgb24gdGhlIE1vbmdvREIgY29ubmVjdG9yLCB0aGluZ3MgeW91IGhhdmUgdG8gY2hhbmdlIGFyZTpcbiAqXG4gKiAxLiBNYWtlIHN1cmUgdGhhdCB0aGUgaWQgZmllbGRzIGFyZSBtYXBwZWQgY29ycmVjdGx5XG4gKlxuICogYGBgcHJpc21hXG4gKiBpZCAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKFwiX2lkXCIpIEBkYi5PYmplY3RJZFxuICogYGBgXG4gKlxuICogMi4gVGhlIE5hdGl2ZSBkYXRhYmFzZSB0eXBlIGF0dHJpYnV0ZSB0byBgQGRiLlN0cmluZ2AgZnJvbSBgQGRiLlRleHRgIGFuZCB1c2VySWQgdG8gYEBkYi5PYmplY3RJZGAuXG4gKlxuICogYGBgcHJpc21hXG4gKiB1c2VyX2lkICAgICAgICAgICAgU3RyaW5nICAgQGRiLk9iamVjdElkXG4gKiByZWZyZXNoX3Rva2VuICAgICAgU3RyaW5nPyAgQGRiLlN0cmluZ1xuICogYWNjZXNzX3Rva2VuICAgICAgIFN0cmluZz8gIEBkYi5TdHJpbmdcbiAqIGlkX3Rva2VuICAgICAgICAgICBTdHJpbmc/ICBAZGIuU3RyaW5nXG4gKiBgYGBcbiAqXG4gKiBFdmVyeXRoaW5nIGVsc2Ugc2hvdWxkIGJlIHRoZSBzYW1lLlxuICpcbiAqICMjIyBOYW1pbmcgQ29udmVudGlvbnNcbiAqXG4gKiBJZiBtaXhlZCBzbmFrZV9jYXNlIGFuZCBjYW1lbENhc2UgY29sdW1uIG5hbWVzIGlzIGFuIGlzc3VlIGZvciB5b3UgYW5kL29yIHlvdXIgdW5kZXJseWluZyBkYXRhYmFzZSBzeXN0ZW0sIHdlIHJlY29tbWVuZCB1c2luZyBQcmlzbWEncyBgQG1hcCgpYChbc2VlIHRoZSBkb2N1bWVudGF0aW9uIGhlcmVdKGh0dHBzOi8vd3d3LnByaXNtYS5pby9kb2NzL2NvbmNlcHRzL2NvbXBvbmVudHMvcHJpc21hLXNjaGVtYS9uYW1lcy1pbi11bmRlcmx5aW5nLWRhdGFiYXNlKSkgZmVhdHVyZSB0byBjaGFuZ2UgdGhlIGZpZWxkIG5hbWVzLiBUaGlzIHdvbid0IGFmZmVjdCBBdXRoLmpzLCBidXQgd2lsbCBhbGxvdyB5b3UgdG8gY3VzdG9taXplIHRoZSBjb2x1bW4gbmFtZXMgdG8gd2hpY2hldmVyIG5hbWluZyBjb252ZW50aW9uIHlvdSB3aXNoLlxuICpcbiAqIEZvciBleGFtcGxlLCBtb3ZpbmcgdG8gYHNuYWtlX2Nhc2VgIGFuZCBwbHVyYWwgdGFibGUgbmFtZXMuXG4gKlxuICogYGBganNvbiB0aXRsZT1cInNjaGVtYS5wcmlzbWFcIlxuICogbW9kZWwgQWNjb3VudCB7XG4gKiAgIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIHVzZXJJZCAgICAgICAgICAgICBTdHJpbmcgIEBtYXAoXCJ1c2VyX2lkXCIpXG4gKiAgIHR5cGUgICAgICAgICAgICAgICBTdHJpbmdcbiAqICAgcHJvdmlkZXIgICAgICAgICAgIFN0cmluZ1xuICogICBwcm92aWRlckFjY291bnRJZCAgU3RyaW5nICBAbWFwKFwicHJvdmlkZXJfYWNjb3VudF9pZFwiKVxuICogICByZWZyZXNoX3Rva2VuICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBhY2Nlc3NfdG9rZW4gICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBleHBpcmVzX2F0ICAgICAgICAgSW50P1xuICogICB0b2tlbl90eXBlICAgICAgICAgU3RyaW5nP1xuICogICBzY29wZSAgICAgICAgICAgICAgU3RyaW5nP1xuICogICBpZF90b2tlbiAgICAgICAgICAgU3RyaW5nPyBAZGIuVGV4dFxuICogICBzZXNzaW9uX3N0YXRlICAgICAgU3RyaW5nP1xuICpcbiAqICAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSlcbiAqXG4gKiAgIEBAdW5pcXVlKFtwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWRdKVxuICogICBAQG1hcChcImFjY291bnRzXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgU2Vzc2lvbiB7XG4gKiAgIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoY3VpZCgpKVxuICogICBzZXNzaW9uVG9rZW4gU3RyaW5nICAgQHVuaXF1ZSBAbWFwKFwic2Vzc2lvbl90b2tlblwiKVxuICogICB1c2VySWQgICAgICAgU3RyaW5nICAgQG1hcChcInVzZXJfaWRcIilcbiAqICAgZXhwaXJlcyAgICAgIERhdGVUaW1lXG4gKiAgIHVzZXIgICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpXG4gKlxuICogICBAQG1hcChcInNlc3Npb25zXCIpXG4gKiB9XG4gKlxuICogbW9kZWwgVXNlciB7XG4gKiAgIGlkICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChjdWlkKCkpXG4gKiAgIG5hbWUgICAgICAgICAgU3RyaW5nP1xuICogICBlbWFpbCAgICAgICAgIFN0cmluZz8gICBAdW5pcXVlXG4gKiAgIGVtYWlsVmVyaWZpZWQgRGF0ZVRpbWU/IEBtYXAoXCJlbWFpbF92ZXJpZmllZFwiKVxuICogICBpbWFnZSAgICAgICAgIFN0cmluZz9cbiAqICAgYWNjb3VudHMgICAgICBBY2NvdW50W11cbiAqICAgc2Vzc2lvbnMgICAgICBTZXNzaW9uW11cbiAqXG4gKiAgIEBAbWFwKFwidXNlcnNcIilcbiAqIH1cbiAqXG4gKiBtb2RlbCBWZXJpZmljYXRpb25Ub2tlbiB7XG4gKiAgIGlkZW50aWZpZXIgU3RyaW5nXG4gKiAgIHRva2VuICAgICAgU3RyaW5nICAgQHVuaXF1ZVxuICogICBleHBpcmVzICAgIERhdGVUaW1lXG4gKlxuICogICBAQHVuaXF1ZShbaWRlbnRpZmllciwgdG9rZW5dKVxuICogICBAQG1hcChcInZlcmlmaWNhdGlvbnRva2Vuc1wiKVxuICogfVxuICogYGBgXG4gKlxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIFByaXNtYUFkYXB0ZXIocCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVVzZXI6IChkYXRhKSA9PiBwLnVzZXIuY3JlYXRlKHsgZGF0YSB9KSxcbiAgICAgICAgZ2V0VXNlcjogKGlkKSA9PiBwLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSksXG4gICAgICAgIGdldFVzZXJCeUVtYWlsOiAoZW1haWwpID0+IHAudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5QWNjb3VudChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHAuYWNjb3VudC5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyB1c2VyOiB0cnVlIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2NvdW50Py51c2VyID8/IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVVzZXI6ICh7IGlkLCAuLi5kYXRhIH0pID0+IHAudXNlci51cGRhdGUoeyB3aGVyZTogeyBpZCB9LCBkYXRhIH0pLFxuICAgICAgICBkZWxldGVVc2VyOiAoaWQpID0+IHAudXNlci5kZWxldGUoeyB3aGVyZTogeyBpZCB9IH0pLFxuICAgICAgICBsaW5rQWNjb3VudDogKGRhdGEpID0+IHAuYWNjb3VudC5jcmVhdGUoeyBkYXRhIH0pLFxuICAgICAgICB1bmxpbmtBY2NvdW50OiAocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpID0+IHAuYWNjb3VudC5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgcHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGFzeW5jIGdldFNlc3Npb25BbmRVc2VyKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgY29uc3QgdXNlckFuZFNlc3Npb24gPSBhd2FpdCBwLnNlc3Npb24uZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgc2Vzc2lvblRva2VuIH0sXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdXNlckFuZFNlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCB7IHVzZXIsIC4uLnNlc3Npb24gfSA9IHVzZXJBbmRTZXNzaW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsgdXNlciwgc2Vzc2lvbiB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVTZXNzaW9uOiAoZGF0YSkgPT4gcC5zZXNzaW9uLmNyZWF0ZSh7IGRhdGEgfSksXG4gICAgICAgIHVwZGF0ZVNlc3Npb246IChkYXRhKSA9PiBwLnNlc3Npb24udXBkYXRlKHsgd2hlcmU6IHsgc2Vzc2lvblRva2VuOiBkYXRhLnNlc3Npb25Ub2tlbiB9LCBkYXRhIH0pLFxuICAgICAgICBkZWxldGVTZXNzaW9uOiAoc2Vzc2lvblRva2VuKSA9PiBwLnNlc3Npb24uZGVsZXRlKHsgd2hlcmU6IHsgc2Vzc2lvblRva2VuIH0gfSksXG4gICAgICAgIGFzeW5jIGNyZWF0ZVZlcmlmaWNhdGlvblRva2VuKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvblRva2VuID0gYXdhaXQgcC52ZXJpZmljYXRpb25Ub2tlbi5jcmVhdGUoeyBkYXRhIH0pO1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcnMgLy8gTW9uZ29EQiBuZWVkcyBhbiBJRCwgYnV0IHdlIGRvbid0XG4gICAgICAgICAgICBpZiAodmVyaWZpY2F0aW9uVG9rZW4uaWQpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHZlcmlmaWNhdGlvblRva2VuLmlkO1xuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWNhdGlvblRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1c2VWZXJpZmljYXRpb25Ub2tlbihpZGVudGlmaWVyX3Rva2VuKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvblRva2VuID0gYXdhaXQgcC52ZXJpZmljYXRpb25Ub2tlbi5kZWxldGUoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZGVudGlmaWVyX3Rva2VuIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcnMgLy8gTW9uZ29EQiBuZWVkcyBhbiBJRCwgYnV0IHdlIGRvbid0XG4gICAgICAgICAgICAgICAgaWYgKHZlcmlmaWNhdGlvblRva2VuLmlkKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmVyaWZpY2F0aW9uVG9rZW4uaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWNhdGlvblRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdG9rZW4gYWxyZWFkeSB1c2VkL2RlbGV0ZWQsIGp1c3QgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3d3dy5wcmlzbWEuaW8vZG9jcy9yZWZlcmVuY2UvYXBpLXJlZmVyZW5jZS9lcnJvci1yZWZlcmVuY2UjcDIwMjVcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gXCJQMjAyNVwiKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJwIiwiY3JlYXRlVXNlciIsImRhdGEiLCJ1c2VyIiwiY3JlYXRlIiwiZ2V0VXNlciIsImlkIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZ2V0VXNlckJ5RW1haWwiLCJlbWFpbCIsImdldFVzZXJCeUFjY291bnQiLCJwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCIsImFjY291bnQiLCJzZWxlY3QiLCJ1cGRhdGVVc2VyIiwidXBkYXRlIiwiZGVsZXRlVXNlciIsImRlbGV0ZSIsImxpbmtBY2NvdW50IiwidW5saW5rQWNjb3VudCIsImdldFNlc3Npb25BbmRVc2VyIiwic2Vzc2lvblRva2VuIiwidXNlckFuZFNlc3Npb24iLCJzZXNzaW9uIiwiaW5jbHVkZSIsImNyZWF0ZVNlc3Npb24iLCJ1cGRhdGVTZXNzaW9uIiwiZGVsZXRlU2Vzc2lvbiIsImNyZWF0ZVZlcmlmaWNhdGlvblRva2VuIiwidmVyaWZpY2F0aW9uVG9rZW4iLCJ1c2VWZXJpZmljYXRpb25Ub2tlbiIsImlkZW50aWZpZXJfdG9rZW4iLCJlcnJvciIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/prisma-adapter/index.js\n");

/***/ })

};
;