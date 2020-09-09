USE [master]
GO

/****** Object:  Database [InsuranceDB]    Script Date: 2020-09-08 9:23:34 PM ******/
CREATE DATABASE [InsuranceDB]
 CONTAINMENT = NONE
 GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InsuranceDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [InsuranceDB] SET ANSI_NULL_DEFAULT ON 
GO

ALTER DATABASE [InsuranceDB] SET ANSI_NULLS ON 
GO

ALTER DATABASE [InsuranceDB] SET ANSI_PADDING ON 
GO

ALTER DATABASE [InsuranceDB] SET ANSI_WARNINGS ON 
GO

ALTER DATABASE [InsuranceDB] SET ARITHABORT ON 
GO

ALTER DATABASE [InsuranceDB] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [InsuranceDB] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [InsuranceDB] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [InsuranceDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [InsuranceDB] SET CURSOR_DEFAULT  LOCAL 
GO

ALTER DATABASE [InsuranceDB] SET CONCAT_NULL_YIELDS_NULL ON 
GO

ALTER DATABASE [InsuranceDB] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [InsuranceDB] SET QUOTED_IDENTIFIER ON 
GO

ALTER DATABASE [InsuranceDB] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [InsuranceDB] SET  DISABLE_BROKER 
GO

ALTER DATABASE [InsuranceDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [InsuranceDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [InsuranceDB] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [InsuranceDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [InsuranceDB] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [InsuranceDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [InsuranceDB] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [InsuranceDB] SET RECOVERY FULL 
GO

ALTER DATABASE [InsuranceDB] SET  MULTI_USER 
GO

ALTER DATABASE [InsuranceDB] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [InsuranceDB] SET DB_CHAINING OFF 
GO

ALTER DATABASE [InsuranceDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [InsuranceDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [InsuranceDB] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [InsuranceDB] SET QUERY_STORE = OFF
GO

USE [InsuranceDB]
GO

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO

ALTER DATABASE [InsuranceDB] SET  READ_WRITE 
GO


USE [InsuranceDB]
GO

/****** Object:  Table [dbo].[Categories]    Script Date: 2020-09-08 9:23:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Categories]([Name]) VALUES('Electronics')
INSERT INTO [dbo].[Categories]([Name]) VALUES('Clothing')
INSERT INTO [dbo].[Categories]([Name]) VALUES('Kitchen')
INSERT INTO [dbo].[Categories]([Name]) VALUES('Furniture')

GO

/****** Object:  Table [dbo].[Items]    Script Date: 2020-09-08 9:24:20 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Items](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Value] [money] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Items] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Items]  WITH CHECK ADD  CONSTRAINT [FK_Items_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Items] CHECK CONSTRAINT [FK_Items_Categories_CategoryId]
GO

