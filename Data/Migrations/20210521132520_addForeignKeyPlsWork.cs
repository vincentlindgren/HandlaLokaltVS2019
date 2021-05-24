using Microsoft.EntityFrameworkCore.Migrations;

namespace HandlaLokalt1.Data.Migrations
{
    public partial class addForeignKeyPlsWork : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_StoreModel_UserId",
                table: "StoreModel");

            migrationBuilder.CreateIndex(
                name: "IX_StoreModel_UserId",
                table: "StoreModel",
                column: "UserId",
                unique: true,
                filter: "[UserId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_StoreModel_UserId",
                table: "StoreModel");

            migrationBuilder.CreateIndex(
                name: "IX_StoreModel_UserId",
                table: "StoreModel",
                column: "UserId");
        }
    }
}
