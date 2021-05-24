using Microsoft.EntityFrameworkCore.Migrations;

namespace HandlaLokalt1.Migrations
{
    public partial class pls3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StoreModels_ApplicationUser_UserId",
                table: "StoreModels");

            migrationBuilder.DropIndex(
                name: "IX_StoreModels_UserId",
                table: "StoreModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ApplicationUser",
                table: "ApplicationUser");

            migrationBuilder.RenameTable(
                name: "ApplicationUser",
                newName: "ApplicationUsers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ApplicationUsers",
                table: "ApplicationUsers",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_StoreModels_UserId",
                table: "StoreModels",
                column: "UserId",
                unique: true,
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_StoreModels_ApplicationUsers_UserId",
                table: "StoreModels",
                column: "UserId",
                principalTable: "ApplicationUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StoreModels_ApplicationUsers_UserId",
                table: "StoreModels");

            migrationBuilder.DropIndex(
                name: "IX_StoreModels_UserId",
                table: "StoreModels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ApplicationUsers",
                table: "ApplicationUsers");

            migrationBuilder.RenameTable(
                name: "ApplicationUsers",
                newName: "ApplicationUser");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ApplicationUser",
                table: "ApplicationUser",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_StoreModels_UserId",
                table: "StoreModels",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_StoreModels_ApplicationUser_UserId",
                table: "StoreModels",
                column: "UserId",
                principalTable: "ApplicationUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
