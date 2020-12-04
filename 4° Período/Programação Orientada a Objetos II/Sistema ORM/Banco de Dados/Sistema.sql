

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------

-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `curso`

-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `curso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `ementa` VARCHAR(45) NOT NULL,
  `cargaHoraria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `instrutor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instrutor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `cpf` VARCHAR(30) NOT NULL,
  `endereco` VARCHAR(30) NOT NULL,
  `celular` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oferta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oferta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dataInicial` VARCHAR(45) NOT NULL,
  `dataFinal` VARCHAR(45) NOT NULL,
  `status` INT NOT NULL,
  `curso_id` INT NULL,
  `instrutor_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_oferta_curso_idx` (`curso_id` ASC) INVISIBLE,
  INDEX `fk_oferta_instrutor1_idx` (`instrutor_id` ASC) INVISIBLE,
  CONSTRAINT `fk_oferta_1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `curso` (`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_oferta_2`
    FOREIGN KEY (`instrutor_id`)
    REFERENCES `instrutor` (`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


