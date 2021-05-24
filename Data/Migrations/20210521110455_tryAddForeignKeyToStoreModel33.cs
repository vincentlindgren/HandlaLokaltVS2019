using Microsoft.EntityFrameworkCore.Migrations;

namespace HandlaLokalt1.Data.Migrations
{
    public partial class tryAddForeignKeyToStoreModel33 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StoreModel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    StoreName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StorePagePicture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StorePageDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StorePhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StoreEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StoreAdress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessHoursWeekDays = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessHoursSaturday = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusinessHoursSunday = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoreModel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StoreModel_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StoreModel_UserId",
                table: "StoreModel",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StoreModel");
        }
    }
}
