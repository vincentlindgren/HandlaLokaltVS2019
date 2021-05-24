using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HandlaLokalt1.Migrations
{
    public partial class addStoreModelCompleteTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BusinessHoursSaturday",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BusinessHoursSunday",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BusinessHoursWeekDays",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StoreAdress",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StoreEmail",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StorePageDescription",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StorePagePicture",
                table: "StoreModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StorePhoneNumber",
                table: "StoreModels",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "StoreModels",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ApplicationUser",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationUser", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StoreModels_ApplicationUser_UserId",
                table: "StoreModels");

            migrationBuilder.DropTable(
                name: "ApplicationUser");

            migrationBuilder.DropIndex(
                name: "IX_StoreModels_UserId",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "BusinessHoursSaturday",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "BusinessHoursSunday",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "BusinessHoursWeekDays",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "StoreAdress",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "StoreEmail",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "StorePageDescription",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "StorePagePicture",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "StorePhoneNumber",
                table: "StoreModels");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "StoreModels");
        }
    }
}
